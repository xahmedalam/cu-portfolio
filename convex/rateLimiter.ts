import { RateLimiter } from "@convex-dev/rate-limiter";
import { components } from "./_generated/api";

// const MINUTE = 60 * 1000;
const DAY = 24 * 60 * 60 * 1000;

export const rateLimiter = new RateLimiter(components.rateLimiter, {
  messagesPerIp: {
    kind: "fixed window",
    rate: 2,
    // period: MINUTE,
    period: DAY,
  },
});
