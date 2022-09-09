import type { Framework } from "./types";
import { WebsiteType, AppType } from "./types";

const Astro: Framework = {
  websiteTypes: [WebsiteType.Static, WebsiteType.MostlyStatic, WebsiteType.MostlyStaticOftenUpdated],
  appTypes: [AppType.Mpa],
  features: {
    // typescript: true,
    // hasCli: true,
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

const NextJs: Framework = {
  websiteTypes: [WebsiteType.MostlyStatic, WebsiteType.MostlyStaticOftenUpdated],
  appTypes: [AppType.Spa],
  features: {
    // typescript: true,
    // hasCli: true,
    // fileBasedRouting: true,
  },
  ecosystemIntegrations: {},
  meta: {
    name: "Next.js",
    docsLink: "https://nextjs.org/docs",
    githubOrg: "vercel",
    githubRepo: "next.js",
  },
};

const Remix: Framework = {
  websiteTypes: [WebsiteType.NotStatic],
  appTypes: [AppType.Spa],
  features: {
    // typescript: true,
    // hasCli: true,
    // fileBasedRouting: true,
  },
  ecosystemIntegrations: {},
  meta: {
    name: "Remix",
    docsLink: "https://remix.run/docs/en/v1",
    githubOrg: "remix-run",
    githubRepo: "remix",
  },
};

const React: Framework = {
  websiteTypes: [WebsiteType.NotStatic],
  appTypes: [AppType.Spa],
  features: {
    // typescript: true,
    // hasCli: true,
    // fileBasedRouting: false,
  },
  ecosystemIntegrations: {},
  meta: {
    name: "React",
    docsLink: "https://reactjs.org/docs/getting-started.html",
    githubOrg: "facebook",
    githubRepo: "react",
  },
};

export const Frameworks = {
  [WebsiteType.Static as string]: [Astro],
  [WebsiteType.MostlyStatic as string]: [Astro],
  [WebsiteType.MostlyStaticOftenUpdated as string]: [Astro, NextJs],
  [WebsiteType.NotStatic as string]: [Remix, React],
};
