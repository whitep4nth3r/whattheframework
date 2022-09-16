import { Framework, WebsiteType, AppType } from "../types";

export const Metalsmith: Framework = {
  websiteTypes: [WebsiteType.Static],
  appTypes: [AppType.Mpa],
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
