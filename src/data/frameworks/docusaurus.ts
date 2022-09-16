import { Framework, WebsiteType, AppType } from "../types";
import { React } from "./react";

export const Docusaurus: Framework = {
  websiteTypes: [WebsiteType.Static],
  appTypes: [AppType.Spa],
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
