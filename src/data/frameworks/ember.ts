import { Framework, WebsiteType, AppType } from "../types";

export const Ember: Framework = {
  websiteTypesInOrderOfPriority: [WebsiteType.Dynamic],
  appTypesInOrderOfPriority: [AppType.Spa],
  features: {
    typescript: true,
    hasCli: true,
  },
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
