import { Framework, WebsiteType, AppType } from "../types";

export const Hexo: Framework = {
  websiteTypes: [WebsiteType.Static],
  appTypes: [AppType.Mpa],
  features: {
    typescript: false,
    hasCli: true,
  },
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
