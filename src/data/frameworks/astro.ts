import { Framework, WebsiteType, AppType } from "../types";

//subframework — LOTS OF THEM

export const Astro: Framework = {
  websiteTypes: [WebsiteType.Static, WebsiteType.Dynamic],
  appTypes: [AppType.Mpa],
  features: {
    typescript: true,
    hasCli: true,
    // fileBasedRouting: true,
  },
  ecosystemIntegrations: {},
  meta: {
    name: "Astro",
    docsLink: "https://docs.astro.build",
    githubOrg: "withastro",
    githubRepo: "astro",
  },
};
