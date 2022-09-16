import { Framework, WebsiteType, AppType } from "../types";

// subframework
// lots of ecosystem integrations in this one

export const Redwood: Framework = {
  websiteTypes: [WebsiteType.Static, WebsiteType.Hybrid, WebsiteType.Dynamic],
  appTypes: [AppType.Mpa, AppType.Spa],
  features: {
    typescript: true,
    hasCli: true,
    // fileBasedRouting: true,
  },
  ecosystemIntegrations: {},
  meta: {
    name: "Redwood",
    docsLink: "https://redwoodjs.com/docs/introduction",
    githubOrg: "redwoodjs",
    githubRepo: "redwood",
  },
};
