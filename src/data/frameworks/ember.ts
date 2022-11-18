import { Framework, WebsiteType, AppType, FrameworkFeatures } from "../types";

export const Ember: Framework = {
  websiteTypesInOrderOfPriority: [WebsiteType.Dynamic],
  appTypesInOrderOfPriority: [AppType.Spa],
  features: [FrameworkFeatures.Cli, FrameworkFeatures.TypeScript],
  usesFrameworks: [],
  templatingEngines: [],
  ecosystemIntegrations: [],
  meta: {
    name: "Ember",
    docsLink: "https://emberjs.com/",
    githubOrg: "emberjs",
    githubRepo: "ember.js",
  },
};
