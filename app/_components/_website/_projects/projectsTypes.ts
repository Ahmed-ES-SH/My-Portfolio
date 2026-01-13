// Types
export interface ProjectData {
  folderName: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  images: string[];
  skills: string[];
  linkSourceCode: string;
  projectLink: string;
  isPrivate: boolean;
}

interface TechBadgeProps {
  tech: string;
  index: number;
  length: number;
}

interface ProjectLinksProps {
  sourceCodeLink: string;
  projectLink: string;
  isPrivate: boolean;
  projectCard: {
    technologiesUsed: string;
    sourceCode: string;
    liveDemo: string;
    privateRepo: string;
  };
}

interface projectCardProps {
  project: ProjectData;
  index: number;
}
