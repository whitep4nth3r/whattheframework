export enum WebsiteType {
  Static = "static", // ssg
  Hybrid = "hybrid", // some server-side runtime available to make dynamic content at the server-level (not client)
  Dynamic = "dynamic", // full ssr
}

export enum AppType {
  Spa = "spa",
  Mpa = "mpa",
}

//TODO — add in a "sub frameworks" bit of data, such as React, Vue etc
//TODO — add in a "supporting templating engines?" bit of data, such as pug, liquid
//TODO — add edge rendering support

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
