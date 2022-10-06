import { React } from "./react";
import { Framework, WebsiteType, AppType, FrameworkFeatures } from "../types";

export const NextJs: Framework = {
  websiteTypesInOrderOfPriority: [WebsiteType.Hybrid, WebsiteType.Dynamic, WebsiteType.Static],
  appTypesInOrderOfPriority: [AppType.Spa, AppType.Mpa],
  features: [FrameworkFeatures.Cli, FrameworkFeatures.TypeScript],
  usesFrameworks: [React],
  templatingEngines: [],
  ecosystemIntegrations: [],
  meta: {
    name: "Next.js",
    docsLink: "https://nextjs.org/docs",
    githubOrg: "vercel",
    githubRepo: "next.js",
  },
};
