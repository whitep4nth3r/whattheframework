import { Angular } from "./angular";
import { Framework, WebsiteType, AppType, FrameworkFeatures } from "../types";

//subframework Angular

export const Scully: Framework = {
  websiteTypesInOrderOfPriority: [WebsiteType.Static],
  appTypesInOrderOfPriority: [AppType.Spa],
  features: [FrameworkFeatures.Cli, FrameworkFeatures.TypeScript],
  usesFrameworks: [Angular],
  templatingEngines: [],
  ecosystemIntegrations: [],
  meta: {
    name: "Scully",
    docsLink: "https://scully.io/",
    githubOrg: "scullyio",
    githubRepo: "scully",
  },
};
