import { Framework, WebsiteType, AppType, FrameworkFeatures } from "../types";

export const Svelte: Framework = {
  websiteTypesInOrderOfPriority: [WebsiteType.Dynamic],
  appTypesInOrderOfPriority: [AppType.Spa],
  features: [FrameworkFeatures.TypeScript, FrameworkFeatures.Cli],
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
