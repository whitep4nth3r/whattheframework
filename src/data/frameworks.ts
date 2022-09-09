import type { Framework } from "./types";
import { WebsiteType } from "./types";

const Astro: Framework = {
  websiteTypes: [WebsiteType.Static, WebsiteType.MostlyStatic, WebsiteType.MostlyStaticOftenUpdated],
  features: {
    typescript: true,
    hasCli: true,
    fileBasedRouting: true,
  },
  ecosystemIntegrations: {},
  meta: {
    name: "Astro",
    docsLink: "https://docs.astro.build",
    githubRepo: "withastro/astro",
  },
};

const NextJs: Framework = {
  websiteTypes: [WebsiteType.MostlyStatic, WebsiteType.MostlyStaticOftenUpdated],
  features: {
    typescript: true,
    hasCli: true,
    fileBasedRouting: true,
  },
  ecosystemIntegrations: {},
  meta: {
    name: "Next.js",
    docsLink: "https://nextjs.org/docs",
    githubRepo: "vercel/next.js",
  },
};

const Remix: Framework = {
  websiteTypes: [WebsiteType.NotStatic],
  features: {
    typescript: true,
    hasCli: true,
    fileBasedRouting: true,
  },
  ecosystemIntegrations: {},
  meta: {
    name: "Remix",
    docsLink: "https://remix.run/docs/en/v1",
    githubRepo: "remix-run/remix",
  },
};

export const Frameworks = {
  [WebsiteType.Static as string]: [Astro],
  [WebsiteType.MostlyStatic as string]: [Astro],
  [WebsiteType.MostlyStaticOftenUpdated as string]: [Astro, NextJs],
  [WebsiteType.NotStatic as string]: [Remix],
};
