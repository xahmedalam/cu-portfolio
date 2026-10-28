import rateLimiter from "@convex-dev/rate-limiter/convex.config.js";
import { defineApp } from "convex/server";
import { v } from "convex/values";

const app = defineApp({
  env: {
    DISCORD_WEBHOOK_URL: v.string(),
  },
});
app.use(rateLimiter);

export default app;
