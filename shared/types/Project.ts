export interface ProjectDetails {
  title: string;
  text: string[];
  siteUrl?: string;
  images: string[];
}

export interface ProjectExternalLink {
  url: string;
  title: string;
}

export interface Project {
  name: string;
  company: string;
  type: string;
  year: number;
  details?: ProjectDetails;
  modalClass?: string;
  externalLink?: ProjectExternalLink;
}
