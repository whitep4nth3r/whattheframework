import { WebsiteType } from "../types/enums";

export const Frameworks = {
  [WebsiteType.Static as string]: ["astro"],
  [WebsiteType.MostlyStatic as string]: ["astro"],
  [WebsiteType.MostlyStaticOftenUpdated as string]: ["next.js"],
  [WebsiteType.NotStatic as string]: ["remix"],
};
