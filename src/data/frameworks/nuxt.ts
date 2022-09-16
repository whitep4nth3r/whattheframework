import { Framework, WebsiteType, AppType } from "../types";

//subframework — Vue?

export const Nuxt: Framework = {
  websiteTypes: [WebsiteType.Static, WebsiteType.Dynamic],
  appTypes: [AppType.Spa],
  features: {
    typescript: true,
    hasCli: false,
    // fileBasedRouting: true,
  },
  ecosystemIntegrations: {},
  meta: {
    name: "Nuxt",
    docsLink: "https://nuxtjs.org/docs/get-started/installation",
    githubOrg: "nuxt",
    githubRepo: "nuxt.js",
  },
};
