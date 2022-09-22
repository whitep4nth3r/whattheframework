import { Framework, WebsiteType, AppType } from "../types";
import { React } from "./react";

export const Docusaurus: Framework = {
  websiteTypesInOrderOfPriority: [WebsiteType.Static],
  appTypesInOrderOfPriority: [AppType.Spa],
  features: {
    typescript: true,
    hasCli: true,
  },
  usesFrameworks: [React],
  templatingEngines: [],
  ecosystemIntegrations: [],
  meta: {
    name: "Docusaurus",
    docsLink: "https://docusaurus.io/docs",
    githubOrg: "facebook",
    githubRepo: "docusaurus",
  },
};
