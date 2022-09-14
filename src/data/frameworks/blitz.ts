import { Framework, WebsiteType, AppType } from "./../types";

// THIS IS BIG
// And would have a LOT of data in "features" and "ecosystemIntegrations"

export const Blitz: Framework = {
  websiteTypes: [WebsiteType.Hybrid, WebsiteType.Dynamic],
  appTypes: [AppType.Spa],
  features: {
    typescript: true,
    hasCli: true,
    // fileBasedRouting: true,
  },
  ecosystemIntegrations: {},
  meta: {
    name: "Blitz",
    docsLink: "https://blitzjs.com/docs/get-started",
    githubOrg: "blitz-js",
    githubRepo: "blitz",
  },
};
