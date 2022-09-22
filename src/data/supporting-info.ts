import { AppType, WebsiteType } from "./types";

// TODO — wordsmithing here

export const SupportingInfo = {
  websiteType: {
    [WebsiteType.Static]: {
      name: "Static Site",
      technology: "pre-rendered HTML pages and static assets",
      description: "A content-based website that provides the same content and experience on every visit.",
      examples: ["blog", "marketing site", "documentation"],
    },
    [WebsiteType.Hybrid]: {
      name: "Hybrid Site",
      technology:
        "a mixture of pre-rendered HTML pages and static assets and server-side rendered content when it needs to be dynamic",
      description:
        "A website where most of the content is the same for everyone, but may also need to cater for unique content on visits to certain pages.",
      examples: ["ecommerce", "news", "learning platforms", "bulletin boards"],
    },
    [WebsiteType.Dynamic]: {
      name: "Dynamic Site",
      technology: "server-side rendered content on every request",
      description: "A website that needs to provide custom and dynamic content for each visitor.",
      examples: ["social media", "forum", "video streaming service"],
    },
  },
  appType: {
    [AppType.Spa]: {
      answerToAppTypeQuestion: "Yes",
      name: "Single-Page Application (SPA)",
      description:
        "This is a website consisting of a single JavaScript application that usually builds HTML pages in the user's browser (client). When you navigate to a new page in a SPA, the JavaScript application builds the HTML. SPAs are a good choice for websites that deal with complex, multi-page state management and data sharing.",
      examples: ["Gmail", "Discord", "Twitter"],
    },
    [AppType.Mpa]: {
      answerToAppTypeQuestion: "No",
      name: "Multi-Page Application (MPA)",
      description:
        "This is a website consisting of multiple HTML pages that are usually built on and delivered from a server or content delivery network (CDN). When you navigate to a new page in a MPA, your browser requests a new page of HTML from the server. MPAs are a good choice for content-based websites where separate pages don't rely on the same state, data or memory.",
      examples: ["Google", "BBC", "Amazon"],
    },
  },
};
