import { Framework, WebsiteType, AppType, FrameworkFeatures } from "../types";

export const Metalsmith: Framework = {
  websiteTypesInOrderOfPriority: [WebsiteType.Static],
  appTypesInOrderOfPriority: [AppType.Mpa],
  features: [],
  usesFrameworks: [],
  templatingEngines: [],
  ecosystemIntegrations: [],
  meta: {
    name: "Metalsmith",
    docsLink: "https://metalsmith.io/docs/",
    githubOrg: "metalsmith",
    githubRepo: "metalsmith",
  },
};
