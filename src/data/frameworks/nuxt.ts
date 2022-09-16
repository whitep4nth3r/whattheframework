import { Vue } from "./vue";
import { Framework, WebsiteType, AppType } from "../types";

export const Nuxt: Framework = {
  websiteTypes: [WebsiteType.Static, WebsiteType.Dynamic],
  appTypes: [AppType.Spa],
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
