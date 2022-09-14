import { Framework, WebsiteType, AppType } from "../types";

export const Angular: Framework = {
  websiteTypes: [
    WebsiteType.Static,
    WebsiteType.MostlyStatic,
    WebsiteType.MostlyStaticOftenUpdated,
    WebsiteType.NotStatic,
  ],
  appTypes: [AppType.Spa],
  features: {
    typescript: true,
    hasCli: true,
    // fileBasedRouting: true,
  },
  ecosystemIntegrations: {},
  meta: {
    name: "Angular",
    docsLink: "https://angular.io/docs",
    githubOrg: "angular",
    githubRepo: "angular",
  },
};
