import { React } from "./react";
import { Framework, WebsiteType, AppType } from "../types";

//subframework — React

export const Remix: Framework = {
  websiteTypesInOrderOfPriority: [WebsiteType.Dynamic],
  appTypesInOrderOfPriority: [AppType.Spa],
  features: {
    typescript: true,
    hasCli: true,
  },
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
