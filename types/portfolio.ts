export type SocialLinks = {
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
};

export type About = {
  name: string;
  role: string;
  summary: string;
  expertise: string;
  resume: string;
  social: SocialLinks;
};

export type Experience = {
  id: string;

  company: {
    name: string;
    website: string;
  };

  role: string;

  employment: {
    type: string;
    location: string;
    startDate: string;
    endDate: string | null;
  };

  responsibilities: string[];
  technologies: string[];
};

export type Project = {
  id: string;
  name: string;
  description: string;
  features: string[];
  technologies: string[];

  links: {
    live: string;
    source: string;
  };
};

export type SkillGroup = {
  category: string;
  visible: boolean;
  items: string[];
};
