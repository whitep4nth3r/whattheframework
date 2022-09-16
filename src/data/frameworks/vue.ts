import { Framework, WebsiteType, AppType } from "../types";

export const Vue: Framework = {
  websiteTypes: [WebsiteType.Dynamic],
  appTypes: [AppType.Spa],
  features: {
    typescript: true,
    hasCli: true,
    // fileBasedRouting: false,
  },
  ecosystemIntegrations: {},
  meta: {
    name: "Vue",
    docsLink: "https://vuejs.org/guide/introduction.html",
    githubOrg: "vuejs",
    githubRepo: "core",
  },
};
