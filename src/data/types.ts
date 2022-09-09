export enum WebsiteType {
  Static = "static",
  MostlyStatic = "mostlystatic",
  MostlyStaticOftenUpdated = "mostlystaticoftenupdated",
  NotStatic = "notstatic",
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
