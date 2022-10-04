import { React } from "./react";
import { Framework, WebsiteType, AppType, FrameworkFeatures } from "../types";

export const Gatsby: Framework = {
  websiteTypesInOrderOfPriority: [WebsiteType.Hybrid, WebsiteType.Static],
  appTypesInOrderOfPriority: [AppType.Spa, AppType.Mpa],
  features: [FrameworkFeatures.TypeScript, FrameworkFeatures.Cli],
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
