import { Framework, WebsiteType, AppType, FrameworkFeatures } from "../types";

export const Svelte: Framework = {
  websiteTypesInOrderOfPriority: [WebsiteType.Dynamic],
  appTypesInOrderOfPriority: [AppType.Spa],
  features: [FrameworkFeatures.Cli, FrameworkFeatures.TypeScript],
  usesFrameworks: [],
  templatingEngines: [],
  ecosystemIntegrations: [],
  meta: {
    name: "Svelte",
    docsLink: "https://svelte.dev/tutorial/basics",
    githubOrg: "sveltejs",
    githubRepo: "svelte",
  },
};
