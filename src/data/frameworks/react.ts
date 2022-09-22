import { Framework, WebsiteType, AppType } from "../types";

export const React: Framework = {
  websiteTypesInOrderOfPriority: [WebsiteType.Dynamic],
  appTypesInOrderOfPriority: [AppType.Spa],
  features: {
    typescript: true,
    hasCli: true,
  },
  usesFrameworks: [],
  templatingEngines: [],
  ecosystemIntegrations: [],
  meta: {
    name: "React",
    docsLink: "https://reactjs.org/docs/getting-started.html",
    githubOrg: "facebook",
    githubRepo: "react",
  },
};
