import { Framework, WebsiteType, AppType } from "../types";

//subframework — React

export const Gatsby: Framework = {
  websiteTypes: [WebsiteType.Static, WebsiteType.Hybrid],
  appTypes: [AppType.Spa],
  features: {
    typescript: true,
    hasCli: true,
    // fileBasedRouting: true,
  },
  ecosystemIntegrations: {},
  meta: {
    name: "Gatsby",
    docsLink: "https://www.gatsbyjs.com/docs",
    githubOrg: "gatsbyjs",
    githubRepo: "gatsby",
  },
};
