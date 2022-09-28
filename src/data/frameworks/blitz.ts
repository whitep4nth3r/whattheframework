import { NextJs } from "./nextjs";
import { React } from "./react";
import { Framework, WebsiteType, AppType, FrameworkFeatures } from "../types";

// THIS IS BIG
// And would have a LOT of data in "features" and "ecosystemIntegrations"

export const Blitz: Framework = {
  websiteTypesInOrderOfPriority: [WebsiteType.Dynamic, WebsiteType.Hybrid],
  appTypesInOrderOfPriority: [AppType.Spa],
  features: [FrameworkFeatures.TypeScript, FrameworkFeatures.Cli],
  usesFrameworks: [React, NextJs],
  templatingEngines: [],
  ecosystemIntegrations: [],
  meta: {
    name: "Blitz",
    docsLink: "https://blitzjs.com/docs/get-started",
    githubOrg: "blitz-js",
    githubRepo: "blitz",
  },
};
