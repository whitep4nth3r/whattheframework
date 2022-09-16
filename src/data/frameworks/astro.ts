import { Preact } from "./preact";
import { Angular } from "./angular";
import { SolidJs } from "./solidjs";
import { Vue } from "./vue";
import { React } from "./react";
import { Framework, WebsiteType, AppType } from "../types";

//subframework — LOTS OF THEM

export const Astro: Framework = {
  websiteTypes: [WebsiteType.Static, WebsiteType.Dynamic],
  appTypes: [AppType.Mpa],
  features: {
    typescript: true,
    hasCli: true,
  },
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
