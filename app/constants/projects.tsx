import { useEffect, useState, useMemo } from "react";

export type ProjectCategory = "frontend" | "backend" | "fullstack";

export type Project = {
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
  categories: ProjectCategory[]; // Changed to array for multi-category support
};

export const useProjectsData = () => {
  const [borsanImages, setBorsanImages] = useState<string[]>([]);
  const [flixtvImages, setFlixtvImages] = useState<string[]>([]);
  const [machicImages, setMachicImages] = useState<string[]>([]);
  const [aramImages, setAramImages] = useState<string[]>([]);
  const [madadImages, setMadadImages] = useState<string[]>([]);
  const [kafeImages, setKafeImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const folders = [
    { name: "borsan", setData: setBorsanImages },
    { name: "flix-tv", setData: setFlixtvImages },
    { name: "machic", setData: setMachicImages },
    { name: "madad", setData: setMadadImages },
    { name: "aram", setData: setAramImages },
    { name: "kafe", setData: setKafeImages },
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

  const projectsData: Project[] = useMemo(
    () => [
      {
        folderName: "aram",
        title: {
          en: "Aram-Gulf",
          ar: "Aram-Gulf",
        },
        description: {
          en: "Aram Gulf platform is an integrated digital solution designed to organize the relationship between users and centers through a single smart system that combines booking communication and promotion the platform provides an efficient booking organizer that allows users to reserve services easily while enabling centers to manage schedules availability and requests with high efficiency the platform includes a card system that offers exclusive benefits and savings enhancing user loyalty and increasing service value it also allows centers to publish their offers directly and reach a wide audience in addition to a flexible coupon system that can be provided to centers or users to support marketing activities Aram Gulf features a direct chat system connecting users with centers alongside realtime notifications that ensure fast interaction and instant updates the platform also supports a user to user promotional system that helps spread services and grow the customer base it includes a comprehensive admin dashboard covering all platform operations as well as two main account types users and centers each with a dedicated dashboard that enables clear and smooth management of data requests and offers",
          ar: "منصة Aram Gulf هي منصة رقمية متكاملة تهدف الى تنظيم العلاقة بين المستخدمين والمراكز من خلال نظام واحد ذكي يجمع بين الحجز والتواصل والترويج حيث توفر المنصة ناظم حجز فعال يتيح للمستخدمين حجز الخدمات بسهولة ويمنح المراكز القدرة على ادارة مواعيدهم وطلبات العملاء بكفاءة كما تحتوي المنصة على نظام بطاقات يساهم في توفير مزايا وعروض خاصة تعزز ولاء المستخدمين وتزيد من قيمة الخدمات المقدمة وتتيح المنصة للمراكز نشر عروضها بشكل مباشر والوصول الى شريحة واسعة من المستخدمين بالاضافة الى نظام كوبونات مرن يمكن تخصيصه للمراكز او للمستخدمين لدعم الحملات التسويقية وتحتوي Aram Gulf على نظام محادثة يربط المستخدمين بالمراكز بشكل مباشر مع نظام اشعارات فورية يضمن سرعة التفاعل ومتابعة جميع التحديثات كما تدعم المنصة نظام ترويجي بين المستخدمين يساهم في انتشار الخدمات وزيادة قاعدة العملاء وتشمل المنصة لوحة تحكم مركزية تغطي جميع جوانب الادارة والتحكم الى جانب وجود نوعين من الحسابات حسابات المستخدمين وحسابات المراكز ولكل نوع حساب لوحة تحكم خاصة تتيح ادارة البيانات والطلبات والعروض بشكل واضح وسلس",
        },
        images: aramImages,
        skills: [
          "Next.js",
          "Laravel",
          "MySQL",
          "TailwindCSS",
          "Redux-ToolKit",
          "Framer Motion",
          "Responsive Design",
          "API",
          "+8",
        ],
        linkSourceCode: "",
        projectLink: "https://aram-gulf.com/en",
        isPrivate: true,
        categories: ["frontend", "backend", "fullstack"],
      },
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
        categories: ["frontend"],
      },
      {
        folderName: "kafe",
        title: {
          en: "Kafe-Wafe",
          ar: "Kafe-Wafe",
        },
        description: {
          en: "The Kafe wafe website's front-end is a modern digital interface inspired by micro-services platforms like Fiverr, focusing entirely on user experience and ease of interaction. It allows users to browse services in an organized manner through categories and advanced search, with clear details for each service including description, price, turnaround time, and ratings. The interface also provides an account system for users, enabling them to register, log in, manage their orders, track service status, and easily communicate with service providers. The interface supports a smooth and responsive user experience across various devices, making the search, ordering, and interaction processes more efficient and intuitive.",
          ar: "واجهة موقع Kafe wafe الأمامية هي واجهة رقمية حديثة مستوحاة من فكرة منصات الخدمات المصغرة مثل Fiverr وتركز بشكل كامل على تجربة المستخدم وسهولة التفاعل حيث تتيح للمستخدمين تصفح الخدمات المعروضة بطريقة منظمة من خلال التصنيفات والبحث المتقدم مع إمكانية عرض تفاصيل كل خدمة بشكل واضح يشمل الوصف والأسعار ومدة التنفيذ والتقييمات كما توفر الواجهة نظام حسابات للمستخدمين يمكنهم من التسجيل وتسجيل الدخول وإدارة طلباتهم ومتابعة حالة الخدمات والتواصل مع مقدمي الخدمة بسهولة وتدعم الواجهة تجربة استخدام سلسة وسريعة الاستجابة على مختلف الأجهزة مما يجعل عملية البحث والطلب والتفاعل أكثر كفاءة ووضوح",
        },
        images: kafeImages,
        skills: [
          "Next.js",
          "TailwindCSS",
          "Context",
          "Framer Motion",
          "Responsive Design",
        ],
        linkSourceCode: "https://github.com/Ahmed-ES-SH/kafe-frontend",
        projectLink: "https://kafe-front.vercel.app/en",
        isPrivate: false,
        categories: ["frontend"],
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
        categories: ["frontend"],
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
        categories: ["frontend"],
      },
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
        categories: ["frontend"],
      },
    ],
    [
      aramImages,
      flixtvImages,
      kafeImages,
      machicImages,
      madadImages,
      borsanImages,
    ]
  );

  return { projectsData, loading };
};
