interface skill {
  icon: string;
  title: { ar: string; en: string };
  desc: {
    ar: string;
    en: string;
  };
  bg_color: string;
}

interface SkillCardProps {
  skill: skill;
  locale: string;
  index: number;
}

interface CategorySectionProps {
  title: string;
  skills: skill[];
  locale: string;
  delay: number;
}
