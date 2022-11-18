import { Liquid } from "./../templating-engines/liquid";
import { Framework, WebsiteType, AppType, FrameworkFeatures } from "../types";

/**
 * Technically, eleventy can do all website types with the intro of eleventy edge for SSR
 * HOWEVER
 * would we recommend all website types for this framework?
 *
 * should we have a weighting system on website types???????????
 */
export const Eleventy: Framework = {
  websiteTypesInOrderOfPriority: [WebsiteType.Static, WebsiteType.Hybrid],
  appTypesInOrderOfPriority: [AppType.Mpa],
  features: [FrameworkFeatures.Cli, FrameworkFeatures.TypeScript],
  usesFrameworks: [],
  templatingEngines: [Liquid],
  ecosystemIntegrations: [],
  meta: {
    name: "Eleventy",
    docsLink: "https://www.11ty.dev/docs/",
    githubOrg: "11ty",
    githubRepo: "eleventy",
  },
};
