export interface ProjectDetails {
  title: string;
  text: string[];
  siteUrl?: string;
  images: string[];
}

export interface Project {
  name: string;
  company: string;
  type: string;
  year: number;
  details?: ProjectDetails;
  modalClass?: string;
}
