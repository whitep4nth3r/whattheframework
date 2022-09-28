import { React } from "./react";
import { Framework, WebsiteType, AppType, FrameworkFeatures } from "../types";

export const Remix: Framework = {
  websiteTypesInOrderOfPriority: [WebsiteType.Dynamic],
  appTypesInOrderOfPriority: [AppType.Spa],
  features: [FrameworkFeatures.TypeScript, FrameworkFeatures.Cli, FrameworkFeatures.Yolo],
  usesFrameworks: [React],
  templatingEngines: [],
  ecosystemIntegrations: [],
  meta: {
    name: "Remix",
    docsLink: "https://remix.run/docs/en/v1",
    githubOrg: "remix-run",
    githubRepo: "remix",
  },
};
