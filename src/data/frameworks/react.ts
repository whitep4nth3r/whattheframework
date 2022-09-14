import { Framework, WebsiteType, AppType } from "../types";

export const React: Framework = {
  websiteTypes: [WebsiteType.NotStatic],
  appTypes: [AppType.Spa],
  features: {
    typescript: true,
    hasCli: true,
    // fileBasedRouting: false,
  },
  ecosystemIntegrations: {},
  meta: {
    name: "React",
    docsLink: "https://reactjs.org/docs/getting-started.html",
    githubOrg: "facebook",
    githubRepo: "react",
  },
};
