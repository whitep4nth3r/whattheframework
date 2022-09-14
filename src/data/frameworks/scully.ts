import { Framework, WebsiteType, AppType } from "../types";

export const Scully: Framework = {
  websiteTypes: [WebsiteType.Static],
  appTypes: [AppType.Spa],
  features: {
    typescript: true,
    hasCli: true,
    // fileBasedRouting: true,
  },
  ecosystemIntegrations: {},
  meta: {
    name: "Scully",
    docsLink: "https://scully.io/",
    githubOrg: "scullyio",
    githubRepo: "scully",
  },
};
