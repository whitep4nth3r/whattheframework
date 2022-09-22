import { React } from "./react";
import { Framework, WebsiteType, AppType } from "../types";

//subframework — React

export const Gatsby: Framework = {
  websiteTypesInOrderOfPriority: [WebsiteType.Hybrid, WebsiteType.Static],
  appTypesInOrderOfPriority: [AppType.Spa],
  features: {
    typescript: true,
    hasCli: true,
  },
  usesFrameworks: [React],
  templatingEngines: [],
  ecosystemIntegrations: [],
  meta: {
    name: "Gatsby",
    docsLink: "https://www.gatsbyjs.com/docs",
    githubOrg: "gatsbyjs",
    githubRepo: "gatsby",
  },
};
