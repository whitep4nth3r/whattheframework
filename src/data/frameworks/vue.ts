import { Framework, WebsiteType, AppType, FrameworkFeatures } from "../types";

export const Vue: Framework = {
  websiteTypesInOrderOfPriority: [WebsiteType.Dynamic],
  appTypesInOrderOfPriority: [AppType.Spa],
  features: [FrameworkFeatures.TypeScript, FrameworkFeatures.Cli, FrameworkFeatures.Test],
  usesFrameworks: [],
  templatingEngines: [],
  ecosystemIntegrations: [],
  meta: {
    name: "Vue",
    docsLink: "https://vuejs.org/guide/introduction.html",
    githubOrg: "vuejs",
    githubRepo: "core",
  },
};
