import { Vue } from "./vue";
import { Framework, WebsiteType, AppType, FrameworkFeatures } from "../types";

export const Nuxt: Framework = {
  websiteTypesInOrderOfPriority: [WebsiteType.Hybrid, WebsiteType.Static, WebsiteType.Dynamic],
  appTypesInOrderOfPriority: [AppType.Spa, AppType.Mpa],
  features: [FrameworkFeatures.TypeScript, FrameworkFeatures.Cli],
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
