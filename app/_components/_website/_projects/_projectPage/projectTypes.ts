interface projectType {
  folderName: string;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  images: string[];
  skills: string[];
  linkSourceCode: string;
  projectLink: string;
  isPrivate: boolean;
  categories: string[];
}

interface GalleryLightboxProps {
  images: string[];
  folderName: string;
  initialIndex: number;
  onClose: () => void;
}

interface FeatureCardProps {
  feature: string;
  index: number;
}

interface ProjectPageHeroProps {
  project: projectType;
}

interface ProjectGalleryProps {
  project: projectType;
}

interface AboutProjectProps {
  project: projectType;
  t: any;
}

interface ProjectKeyFeaturesProps {
  project: projectType;
}

interface ProjectCTASectionProps {
  project: projectType;
}
