import { Framework, WebsiteType, AppType } from "../types";

export const Svelte: Framework = {
  websiteTypesInOrderOfPriority: [WebsiteType.Dynamic],
  appTypesInOrderOfPriority: [AppType.Spa],
  features: {
    typescript: true,
    hasCli: true,
  },
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
