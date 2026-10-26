import { NoOp } from "convex-helpers/server/customFunctions";
import { zCustomMutation } from "convex-helpers/server/zod4";
import { z } from "zod";
import { mutation } from "./_generated/server";

// Make this once, to use anywhere you would have used `query`
// const zQuery = zCustomQuery(query, NoOp);
const zMutation = zCustomMutation(mutation, NoOp);

export const addMessage = zMutation({
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
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("messages", {
      name: args.name,
      email: args.email,
      message: args.message,
    });

    return id;
  },
});
