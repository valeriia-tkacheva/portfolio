export interface Project {
  name: string;
  company: string;
  type: string;
  year: number;
  details?: {
    title: string;
    text: string;
    siteUrl?: string;
    images: string[];
    modClass?: string;
  };
}
