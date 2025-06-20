import { useEffect, useState } from "react";

type Project = {
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
};

export const useProjectsData = () => {
  const [borsanImages, setBorsanImages] = useState<string[]>([]);
  const [flixtvImages, setFlixtvImages] = useState<string[]>([]);
  const [machicImages, setMachicImages] = useState<string[]>([]);
  const [madadImages, setMadadImages] = useState<string[]>([]);
  // const [aramImages, setAramImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const folders = [
    { name: "borsan", setData: setBorsanImages },
    { name: "flix-tv", setData: setFlixtvImages },
    { name: "machic", setData: setMachicImages },
    { name: "madad", setData: setMadadImages },
    // { name: "aram", setData: setAramImages },
  ];

  useEffect(() => {
    const fetchAll = async () => {
      await Promise.all(
        folders.map(async ({ name, setData }) => {
          try {
            const res = await fetch(`/api/images/${name}`);
            const data = await res.json();
            setData(data.images || []);
          } catch (error) {
            console.error(`Error loading ${name} images:`, error);
          }
        })
      );
      setLoading(false);
    };

    fetchAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const projectsData: Project[] = [
    {
      folderName: "flix-tv",
      title: {
        en: "FLIX TV",
        ar: "FLIX TV",
      },
      description: {
        en: "Flix Tv is a fully responsive and feature-rich web application built with Next.js and integrated with the TMDb API to help users explore trending movies and TV shows, manage watch lists, and enjoy an engaging  interface enhanced with beautiful animations. Check out the repository to discover more about the features and technologies used.",
        ar: "Flix Tv هو تطبيق ويب متجاوب بالكامل وغني بالميزات، مُصمم باستخدام Next.js ومتكامل مع واجهة برمجة تطبيقات TMDb، لمساعدة المستخدمين على استكشاف الأفلام والبرامج التلفزيونية الرائجة، وإدارة قوائم المشاهدة، والاستمتاع بواجهة تفاعلية مُحسّنة برسوم متحركة جميلة. تفقّد الكود لاكتشاف المزيد عن الميزات والتقنيات المستخدمة.",
      },
      images: flixtvImages,
      skills: [
        "Next.js",
        "TailwindCSS",
        "Context",
        "API",
        "Framer Motion",
        "Clerk",
        "Responsive Design",
      ],
      linkSourceCode: "https://github.com/Ahmed-ES-SH/TMDB-App",
      projectLink: "https://tmdb-app-kappa.vercel.app",
      isPrivate: false,
    },
    {
      folderName: "machic",
      title: {
        en: "Machie Ecommerce Store",
        ar: "متجر - Machie",
      },
      description: {
        en: "Welcome to a fully responsive, feature-rich e-commerce platform built with Next.js 15. This project offers a realistic online shopping experience by integrating data from DummyJSON API, providing a practical environment to build, test, and explore e-commerce features with real-world-like product information. Check out the repository to discover more about the features and technologies used.",
        ar: "مرحبًا بكم في منصة تجارة إلكترونية متجاوبة بالكامل وغنية بالميزات، مبنية باستخدام Next.js 15. يقدم هذا المشروع تجربة تسوق إلكترونية واقعية من خلال دمج بيانات واجهة برمجة تطبيقات DummyJSON، مما يوفر بيئة عملية لبناء واختبار واستكشاف ميزات التجارة الإلكترونية مع معلومات منتجات واقعية. تفضلوا بزيارة الكود لمعرفة المزيد عن الميزات والتقنيات المستخدمة.",
      },
      images: machicImages,
      skills: [
        "API",
        "Next.js",
        "Tailwindcss",
        "clerk",
        "zuStand",
        "Responsive Design",
      ],
      linkSourceCode: "https://github.com/Ahmed-ES-SH/machie-store",
      projectLink: "https://machie-store.vercel.app",
      isPrivate: false,
    },
    {
      folderName: "madad",
      title: {
        en: "Madad",
        ar: "مدد",
      },
      description: {
        en: "Madad is a modern web UI design created for a company specializing in technical services. The project delivers a sleek and interactive user interface that highlights services and facilitates client communication. It focuses purely on visual presentation and user experience, without integration with real data or backend functionality. Check out the repository to discover more about the features and technologies used.",
        ar: "مداد هو تصميم واجهة مستخدم ويب عصري مُصمم لشركة متخصصة في الخدمات التقنية. يُقدم المشروع واجهة مستخدم أنيقة وتفاعلية تُبرز الخدمات وتُسهّل التواصل مع العملاء. يُركز المشروع بشكل كامل على العرض المرئي وتجربة المستخدم، دون أي تكامل مع البيانات الفعلية أو وظائف الواجهة الخلفية. تفضل بزيارة الكود لتعرّف المزيد حول الميزات والتقنيات المُستخدمة في هذا المشروع.",
      },
      images: madadImages,
      skills: [
        "Next.js",
        "TailwindCSS",
        "Framer Motion",
        "MultiLanguages",
        "Real-time Features",
        "Responsive Design",
      ],
      linkSourceCode: "https://github.com/Ahmed-ES-SH/Madad",
      projectLink: "https://madad-rust.vercel.app",
      isPrivate: false,
    },
    // {
    //   folderName: "aram",
    //   title: {
    //     en: "Aram Gulf",
    //     ar: "شركة آرام الخليج المحدودة",
    //   },
    //   description: {
    //     en: "Aram Gulf is a feature-rich web platform designed for managing service centers. It includes a powerful booking system, real-time chat, integrated payment processing, and a dynamic admin dashboard with detailed statistics. Service centers have full control over their schedules, can accept or reject bookings, and track their earnings through a built-in withdrawal system. The platform also supports real-time notifications and offers a fully customizable interface. Note: If some content appears missing in certain sections, it is due to incomplete input from the owner — not a flaw in the code or system.",
    //     ar: "شركة آرام الخليج المحدودة هي منصة إلكترونية متكاملة وغنية بالميزات، مصممة خصيصًا لإدارة مراكز الخدمات. تشمل المنصة نظام حجوزات احترافي، ومحادثات فورية، ونظام دفع إلكتروني، بالإضافة إلى لوحة تحكم ديناميكية تحتوي على إحصائيات تفصيلية. تتيح للمراكز التحكم الكامل في جدول العمل، مع إمكانية قبول أو رفض الحجوزات، ومتابعة الأرباح من خلال نظام سحب مدمج. كما تدعم المنصة نظام إشعارات فورية وواجهة قابلة للتخصيص بشكل كامل. ملاحظة: في حال وجود نقص في بعض أقسام المحتوى، فإن ذلك يعود إلى عدم توفير البيانات من قِبل المالك، وليس إلى خلل في الكود أو المشروع.",
    //   },
    //   images: aramImages,
    //   skills: [
    //     "Laravel",
    //     "PHP",
    //     "Next.js",
    //     "TailwindCSS",
    //     "Real-time Features",
    //     "Responsive Design",
    //   ],
    //   linkSourceCode: "",
    //   projectLink: "https://aram-gulf.com",
    //   isPrivate: true,
    // },
    {
      folderName: "borsan",
      title: {
        en: "Borsan Academy",
        ar: "أكاديمية بورسان",
      },
      description: {
        en: "Borsan Academy is a modern, responsive web application for browsing and exploring educational courses across various categories. The platform is built with performance, scalability, and user experience at its core. It features full bilingual support (Arabic & English) through a completely custom multilingual system — no external i18n libraries used. Check out the repository to discover more about the features and technologies used.",
        ar: "أكاديمية بورسان هي منصة ويب تعليمية حديثة ومتجاوبة، تتيح تصفّح واستكشاف الدورات التعليمية ضمن تصنيفات متعددة. تم تطوير المنصة مع التركيز على الأداء، وقابلية التوسّع، وتجربة المستخدم. تدعم المنصة واجهتين باللغتين العربية والإنجليزية من خلال نظام متعدد اللغات مخصص بالكامل دون استخدام أي مكتبات خارجية. يمكنك الاطلاع على الكود لمعرفة المزيد حول المميزات والتقنيات المستخدمة.",
      },
      images: borsanImages,
      skills: [
        "Next.js",
        "TailwindCSS",
        "Framer Motion",
        "Clerk",
        "Responsive Design",
        "MultiLanguages",
      ],
      linkSourceCode: "https://github.com/Ahmed-ES-SH/Borsan-Academy",
      projectLink: "https://borsan-frontend.vercel.app",
      isPrivate: false,
    },
  ];

  return { projectsData, loading };
};
