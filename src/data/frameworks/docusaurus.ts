import { Framework, WebsiteType, AppType } from "./../types";

export const Docusaurus: Framework = {
  websiteTypes: [WebsiteType.Static],
  appTypes: [AppType.Spa],
  features: {
    typescript: true,
    hasCli: true,
    // fileBasedRouting: false,
  },
  ecosystemIntegrations: {},
  meta: {
    name: "React",
    docsLink: "https://docusaurus.io/docs",
    githubOrg: "facebook",
    githubRepo: "docusaurus",
  },
};
