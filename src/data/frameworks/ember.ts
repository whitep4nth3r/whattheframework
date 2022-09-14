import { Framework, WebsiteType, AppType } from "../types";

export const Ember: Framework = {
  websiteTypes: [WebsiteType.Dynamic],
  appTypes: [AppType.Spa],
  features: {
    typescript: true,
    hasCli: true,
    // fileBasedRouting: true,
  },
  ecosystemIntegrations: {},
  meta: {
    name: "Ember",
    docsLink: "https://emberjs.com/",
    githubOrg: "emberjs",
    githubRepo: "ember.js",
  },
};
