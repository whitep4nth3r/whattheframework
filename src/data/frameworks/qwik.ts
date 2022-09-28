import { Framework, WebsiteType, AppType, FrameworkFeatures } from "../types";

export const Qwik: Framework = {
  websiteTypesInOrderOfPriority: [WebsiteType.Dynamic],
  appTypesInOrderOfPriority: [AppType.Mpa],
  features: [FrameworkFeatures.TypeScript, FrameworkFeatures.Cli],
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
