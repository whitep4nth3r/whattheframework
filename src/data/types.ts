export enum WebsiteType {
  Static = "static", // ssg
  Hybrid = "hybrid", // some server-side runtime available to make dynamic content
  Dynamic = "dynamic", // ssr
}

export enum AppType {
  Spa = "spa",
  Mpa = "mpa",
}

export type Framework = {
  websiteTypes: WebsiteType[];
  appTypes: AppType[];
  features: {
    // typescript: boolean;
    // hasCli: boolean;
    // fileBasedRouting: boolean;
  };
  ecosystemIntegrations: {};
  meta: {
    name: string;
    docsLink: string;
    githubOrg: string;
    githubRepo: string;
  };
};
