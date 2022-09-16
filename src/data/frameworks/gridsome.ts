import { Vue } from "./vue";
import { Framework, WebsiteType, AppType } from "../types";

export const Gridsome: Framework = {
  websiteTypes: [WebsiteType.Static],
  appTypes: [AppType.Spa],
  features: {
    typescript: true,
    hasCli: true,
  },
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
