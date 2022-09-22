import { Vue } from "./vue";
import { Framework, WebsiteType, AppType } from "../types";

export const Nuxt: Framework = {
  websiteTypesInOrderOfPriority: [WebsiteType.Hybrid, WebsiteType.Dynamic],
  appTypesInOrderOfPriority: [AppType.Spa],
  features: {
    typescript: true,
    hasCli: false,
  },
  usesFrameworks: [Vue],
  templatingEngines: [],
  ecosystemIntegrations: [],
  meta: {
    name: "Nuxt",
    docsLink: "https://nuxtjs.org/docs/get-started/installation",
    githubOrg: "nuxt",
    githubRepo: "nuxt.js",
  },
};
