import { Framework, WebsiteType, AppType } from "../types";

// subframework —

export const SolidJs: Framework = {
  websiteTypes: [WebsiteType.Dynamic],
  appTypes: [AppType.Spa],
  features: {
    typescript: true,
    hasCli: false,
    // fileBasedRouting: false,
  },
  ecosystemIntegrations: {},
  meta: {
    name: "SolidJs",
    docsLink: "https://www.solidjs.com/tutorial/introduction_basics",
    githubOrg: "solidjs",
    githubRepo: "solid",
  },
};
