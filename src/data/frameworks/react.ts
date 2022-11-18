import { Framework, WebsiteType, AppType, FrameworkFeatures } from "../types";

export const React: Framework = {
  websiteTypesInOrderOfPriority: [WebsiteType.Dynamic],
  appTypesInOrderOfPriority: [AppType.Spa],
  features: [FrameworkFeatures.Cli, FrameworkFeatures.TypeScript],
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
