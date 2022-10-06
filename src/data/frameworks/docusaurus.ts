import { Framework, WebsiteType, AppType, FrameworkFeatures } from "../types";
import { React } from "./react";

export const Docusaurus: Framework = {
  websiteTypesInOrderOfPriority: [WebsiteType.Static],
  appTypesInOrderOfPriority: [AppType.Spa],
  features: [FrameworkFeatures.Cli, FrameworkFeatures.TypeScript],
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
