import { Framework, WebsiteType, AppType, FrameworkFeatures } from "../types";

export const Angular: Framework = {
  websiteTypesInOrderOfPriority: [WebsiteType.Dynamic],
  appTypesInOrderOfPriority: [AppType.Spa],
  features: [FrameworkFeatures.Cli, FrameworkFeatures.TypeScript],
  usesFrameworks: [],
  templatingEngines: [],
  ecosystemIntegrations: [],
  meta: {
    name: "Angular",
    docsLink: "https://angular.io/docs",
    githubOrg: "angular",
    githubRepo: "angular",
  },
};
