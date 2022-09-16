import { Framework, WebsiteType, AppType } from "../types";

export const Preact: Framework = {
  websiteTypes: [WebsiteType.Dynamic],
  appTypes: [AppType.Spa],
  features: {
    typescript: true,
    hasCli: true,
  },
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
