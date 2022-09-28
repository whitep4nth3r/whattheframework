import { Preact } from "./preact";
import { Angular } from "./angular";
import { SolidJs } from "./solidjs";
import { Vue } from "./vue";
import { React } from "./react";
import { Framework, WebsiteType, AppType, FrameworkFeatures } from "../types";

//subframework — LOTS OF THEM

export const Astro: Framework = {
  websiteTypesInOrderOfPriority: [WebsiteType.Static, WebsiteType.Dynamic],
  appTypesInOrderOfPriority: [AppType.Mpa],
  features: [FrameworkFeatures.TypeScript, FrameworkFeatures.Cli],
  usesFrameworks: [Angular, Preact, React, SolidJs, Vue],
  templatingEngines: [],
  ecosystemIntegrations: [],
  meta: {
    name: "Astro",
    docsLink: "https://docs.astro.build",
    githubOrg: "withastro",
    githubRepo: "astro",
  },
};
