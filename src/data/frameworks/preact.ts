import { Framework, WebsiteType, AppType, FrameworkFeatures } from "../types";

export const Preact: Framework = {
  websiteTypesInOrderOfPriority: [WebsiteType.Dynamic],
  appTypesInOrderOfPriority: [AppType.Spa],
  features: [FrameworkFeatures.TypeScript, FrameworkFeatures.Cli],
  usesFrameworks: [],
  templatingEngines: [],
  ecosystemIntegrations: [],
  meta: {
    name: "Preact",
    docsLink: "https://preactjs.com/guide/v10/getting-started",
    githubOrg: "preactjs",
    githubRepo: "preact",
  },
};
