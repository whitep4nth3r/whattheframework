import { Framework, WebsiteType, AppType } from "../types";

//subframework — none?

export const Hexo: Framework = {
  websiteTypes: [WebsiteType.Static],
  appTypes: [AppType.Mpa],
  features: {
    typescript: false,
    hasCli: true,
    // fileBasedRouting: true,
  },
  ecosystemIntegrations: {},
  meta: {
    name: "Hexo",
    docsLink: "https://hexo.io/docs/",
    githubOrg: "hexojs",
    githubRepo: "hexo",
  },
};
