import { Vue } from "./vue";
import { Framework, WebsiteType, AppType, FrameworkFeatures } from "../types";

export const Gridsome: Framework = {
  websiteTypesInOrderOfPriority: [WebsiteType.Static],
  appTypesInOrderOfPriority: [AppType.Spa],
  features: [FrameworkFeatures.TypeScript, FrameworkFeatures.Cli],
  usesFrameworks: [Vue],
  templatingEngines: [],
  ecosystemIntegrations: [],
  meta: {
    name: "Gridsome",
    docsLink: "https://gridsome.org/docs/",
    githubOrg: "gridsome",
    githubRepo: "gridsome",
  },
};
