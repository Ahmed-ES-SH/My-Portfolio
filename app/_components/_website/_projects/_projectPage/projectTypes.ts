import { Project } from "@/app/lib/projects";

// Alias projectType to Project for backward compatibility with subcomponents
export type projectType = Project;

export interface GalleryLightboxProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

export interface FeatureCardProps {
  feature: string;
  index: number;
}

export interface ProjectPageHeroProps {
  project: projectType;
}

export interface ProjectGalleryProps {
  project: projectType;
}

export interface AboutProjectProps {
  project: projectType;
  t: any;
}

export interface ProjectKeyFeaturesProps {
  project: projectType;
}

export interface ProjectCTASectionProps {
  project: projectType;
}
