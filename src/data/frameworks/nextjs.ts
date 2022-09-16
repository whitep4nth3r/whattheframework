import { React } from "./react";
import { Framework, WebsiteType, AppType } from "../types";

export const NextJs: Framework = {
  websiteTypes: [WebsiteType.Hybrid],
  appTypes: [AppType.Spa],
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
