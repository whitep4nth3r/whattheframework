import { Framework, WebsiteType, AppType } from "../types";

export const Metalsmith: Framework = {
  websiteTypesInOrderOfPriority: [WebsiteType.Static],
  appTypesInOrderOfPriority: [AppType.Mpa],
  features: {
    typescript: false,
    hasCli: false,
  },
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
