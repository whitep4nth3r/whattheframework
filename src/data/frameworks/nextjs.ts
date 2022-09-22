import { React } from "./react";
import { Framework, WebsiteType, AppType } from "../types";

export const NextJs: Framework = {
  websiteTypesInOrderOfPriority: [WebsiteType.Hybrid, WebsiteType.Dynamic, WebsiteType.Static],
  appTypesInOrderOfPriority: [AppType.Spa, AppType.Mpa],
  features: {
    typescript: true,
    hasCli: true,
  },
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
