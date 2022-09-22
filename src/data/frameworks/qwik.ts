import { Framework, WebsiteType, AppType } from "../types";

export const Qwik: Framework = {
  websiteTypesInOrderOfPriority: [WebsiteType.Dynamic],
  appTypesInOrderOfPriority: [AppType.Mpa],
  features: {
    typescript: true,
    hasCli: true,
  },
  usesFrameworks: [],
  templatingEngines: [],
  ecosystemIntegrations: [],
  meta: {
    name: "Qwik",
    docsLink: "https://qwik.builder.io/docs/overview/",
    githubOrg: "BuilderIO",
    githubRepo: "qwik",
  },
};
