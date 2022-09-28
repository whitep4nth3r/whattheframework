import { Framework, WebsiteType, AppType, FrameworkFeatures } from "../types";

// subframework —

export const SolidJs: Framework = {
  websiteTypesInOrderOfPriority: [WebsiteType.Dynamic],
  appTypesInOrderOfPriority: [AppType.Spa],
  features: [FrameworkFeatures.TypeScript],
  usesFrameworks: [],
  templatingEngines: [],
  ecosystemIntegrations: [],
  meta: {
    name: "SolidJs",
    docsLink: "https://www.solidjs.com/tutorial/introduction_basics",
    githubOrg: "solidjs",
    githubRepo: "solid",
  },
};
