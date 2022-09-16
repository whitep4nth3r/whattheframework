import { Framework, WebsiteType, AppType } from "../types";

//subframework — none?

export const Metalsmith: Framework = {
  websiteTypes: [WebsiteType.Static],
  appTypes: [AppType.Mpa],
  features: {
    typescript: false,
    hasCli: false,
    // fileBasedRouting: true,
  },
  ecosystemIntegrations: {},
  meta: {
    name: "Metalsmith",
    docsLink: "https://metalsmith.io/docs/",
    githubOrg: "metalsmith",
    githubRepo: "metalsmith",
  },
};
