export enum WebsiteType {
  Static = "static", // ssg
  Hybrid = "hybrid", // some server-side runtime available to make dynamic content at the server-level (not client)
  Dynamic = "dynamic", // full ssr
}

export enum AppType {
  Spa = "spa",
  Mpa = "mpa",
}

export type TemplatingEngine = {
  meta: {
    name: string;
  };
};

// TODO — add edge rendering support
// TODO - add ecosystem integrations

export type Framework = {
  websiteTypesInOrderOfPriority: WebsiteType[];
  appTypesInOrderOfPriority: AppType[];
  features: {
    typescript: boolean;
    hasCli: boolean;
  };
  usesFrameworks: Framework[];
  templatingEngines: TemplatingEngine[];
  ecosystemIntegrations: [];
  meta: {
    name: string;
    docsLink: string;
    githubOrg: string;
    githubRepo: string;
  };
};
