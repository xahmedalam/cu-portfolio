import { NoOp } from "convex-helpers/server/customFunctions";
import { zCustomAction } from "convex-helpers/server/zod4";
import { v } from "convex/values";
import { z } from "zod";
import { internal } from "./_generated/api";
import { action, env, internalMutation } from "./_generated/server";
import { rateLimiter } from "./rateLimiter";

// Make this once, to use anywhere you would have used `query`
// const zQuery = zCustomQuery(query, NoOp);
const zAction = zCustomAction(action, NoOp);

export const sendMessage = zAction({
  args: {
    name: z
      .string()
      .trim()
      .min(3, "Name must be at least 3 characters long")
      .max(30, "Name must be less than 30 characters long")
      .regex(/^[a-zA-Z ]+$/, "Name can only contain letters and spaces"),
    email: z.email("Enter a valid email address"),
    message: z
      .string()
      .trim()
      .min(10, "Message must be at least 10 characters long")
      .max(500, "Message must be less than 500 characters long"),
  },
  handler: async (
    ctx,
    args,
  ): Promise<{ status: "success" | "failed"; message: string }> => {
    // Rate limiting
    const { ip } = await ctx.meta.getRequestMetadata();

    if (!ip) {
      return {
        status: "failed",
        message:
          "Could not identify your network address. Please try again later.",
      };
    }

    const rateLimitResult = await rateLimiter.limit(ctx, "messagesPerIp", {
      key: ip,
      throws: false,
    });

    if (!rateLimitResult.ok) {
      return {
        status: "failed",
        message:
          "You have reached the maximum number of messages allowed per day. Please try again later.",
      };
    }

    // Getting location data
    const response = await fetch(
      `http://ip-api.com/json/${ip}?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,mobile,query`,
    );

    // Sending message to discord
    let payload;

    if (response.ok) {
      const ipData = await response.json();

      payload = {
        content: [
          "📬 **New Portfolio Message Received!**",
          `🌐 **IP Address:** ${ip}`,
          `📍 **Location:** ${ipData.country}, ${ipData.regionName}, ${ipData.city}`,
          `👤 **Name:** ${args.name}`,
          `📧 **Email:** ${args.email}`,
          `💬 **Message:**\n> ${args.message}`,
          `\`\`\`${JSON.stringify(ipData)}\`\`\``,
        ].join("\n"),
        allowed_mentions: { parse: [] },
      };
    } else {
      payload = {
        content: [
          "📬 **New Portfolio Message Received!**",
          `🌐 **IP Address:** ${ip}`,
          `📍 **Location:** None`,
          `👤 **Name:** ${args.name}`,
          `📧 **Email:** ${args.email}`,
          `💬 **Message:**\n> ${args.message}`,
        ].join("\n"),
        allowed_mentions: { parse: [] },
      };
    }

    fetch(env.DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    // Save message to db
    await ctx.runMutation(internal.myFunctions.saveMessage, args);

    return { status: "success", message: "Message sent successfully" };
  },
});

export const saveMessage = internalMutation({
  args: {
    name: v.string(),
    email: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("messages", {
      name: args.name,
      email: args.email,
      message: args.message,
    });

    return id;
  },
});
