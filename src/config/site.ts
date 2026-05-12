export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  links: {
    twitter: string;
    linkedin: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "LegalIntel",
  description: "The number one platform for global legal intelligence.",
  url: "http://localhost:3000",
  links: {
    twitter: "https://twitter.com/lexology",
    linkedin: "https://www.linkedin.com/company/lexology",
  },
};
