import { Framework, WebsiteType, AppType } from "../types";

//subframework — React

export const NextJs: Framework = {
  websiteTypes: [WebsiteType.Hybrid],
  appTypes: [AppType.Spa],
  features: {
    typescript: true,
    hasCli: true,
    // fileBasedRouting: true,
  },
  ecosystemIntegrations: {},
  meta: {
    name: "Next.js",
    docsLink: "https://nextjs.org/docs",
    githubOrg: "vercel",
    githubRepo: "next.js",
  },
};
