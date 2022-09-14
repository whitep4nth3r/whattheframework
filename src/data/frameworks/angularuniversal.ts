import { Framework, WebsiteType, AppType } from "../types";

export const AngularUniversal: Framework = {
  websiteTypes: [WebsiteType.Static],
  appTypes: [AppType.Spa],
  features: {
    typescript: true,
    hasCli: true,
    // fileBasedRouting: true,
  },
  ecosystemIntegrations: {},
  meta: {
    name: "Angular Universal",
    docsLink: "https://angular.io/guide/universal",
    githubOrg: "angular",
    githubRepo: "universal",
  },
};
