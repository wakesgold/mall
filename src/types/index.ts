export type ServiceItem = {
  title: string;
  description: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  owner: string;
  industry: string;
  caseType: string;
  projectBackground: string;
  problem: string[];
  whyThisApproach: string;
  executionSteps: string[];
  result: string[];
  coverImage: string;
  gallery: string[];
  featured?: boolean;
  homepageLink?: string;
  background?: string;
  capabilityChange?: string[];
  douyinUrl?: string;
};

export type TeamMember = {
  name: string;
  role: string;
  specialty: string;
  bio: string;
  avatar?: string;
};
