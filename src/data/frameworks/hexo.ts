import { Framework, WebsiteType, AppType, FrameworkFeatures } from "../types";

export const Hexo: Framework = {
  websiteTypesInOrderOfPriority: [WebsiteType.Static],
  appTypesInOrderOfPriority: [AppType.Mpa],
  features: [FrameworkFeatures.Cli],
  usesFrameworks: [],
  templatingEngines: [],
  ecosystemIntegrations: [],
  meta: {
    name: "Hexo",
    docsLink: "https://hexo.io/docs/",
    githubOrg: "hexojs",
    githubRepo: "hexo",
  },
};
