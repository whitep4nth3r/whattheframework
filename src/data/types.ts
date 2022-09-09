export enum WebsiteType {
  Static = "Static",
  MostlyStatic = "MostlyStatic",
  MostlyStaticOftenUpdated = "MostlyStaticOftenUpdated",
  NotStatic = "NotStatic",
}

export type Framework = {
  websiteTypes: WebsiteType[];
  features: {
    typescript: boolean;
    hasCli: boolean;
    fileBasedRouting: boolean;
  };
  ecosystemIntegrations: {};
  meta: {
    name: string;
    docsLink: string;
    githubRepo: string;
  };
};
