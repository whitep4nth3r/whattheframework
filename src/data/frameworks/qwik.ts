import { Framework, WebsiteType, AppType } from "../types";

//subframework —

export const Qwik: Framework = {
  websiteTypes: [WebsiteType.Dynamic],
  appTypes: [AppType.Mpa],
  features: {
    typescript: true,
    hasCli: true,
    // fileBasedRouting: true,
  },
  ecosystemIntegrations: {},
  meta: {
    name: "Qwik",
    docsLink: "https://qwik.builder.io/docs/overview/",
    githubOrg: "BuilderIO",
    githubRepo: "qwik",
  },
};
