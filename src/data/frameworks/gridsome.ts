import { Framework, WebsiteType, AppType } from "../types";

//subframework — Vue

export const Gridsome: Framework = {
  websiteTypes: [WebsiteType.Static],
  appTypes: [AppType.Spa],
  features: {
    typescript: true,
    hasCli: true,
    // fileBasedRouting: true,
  },
  ecosystemIntegrations: {},
  meta: {
    name: "Gridsome",
    docsLink: "https://gridsome.org/docs/",
    githubOrg: "gridsome",
    githubRepo: "gridsome",
  },
};
