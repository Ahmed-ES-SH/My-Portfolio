import { IconType } from "react-icons";
import {
  LuCodeXml,
  LuFolderKanban,
  LuHouse,
  LuSquareUserRound,
} from "react-icons/lu";

interface linksType {
  title: { en: string; ar: string };
  link: string;
  icon: IconType;
}

export const links: linksType[] = [
  {
    title: { en: "Home", ar: "الرئيسية" },
    link: "/",
    icon: LuHouse,
  },
  {
    title: { en: "About me", ar: "من أنا" },
    link: "/about",
    icon: LuSquareUserRound,
  },
  {
    title: { en: "Skills", ar: "المهارات" },
    link: "/skills",
    icon: LuCodeXml,
  },
  {
    title: { en: "My Projects", ar: "أعمالى" },
    link: "/projects",
    icon: LuFolderKanban,
  },
];

export const projects_details_en = [
  {
    images_src: [
      "/Projects/project_3/1.png",
      "/Projects/project_3/2.PNG",
      "/Projects/project_3/3.PNG",
      "/Projects/project_3/4.PNG",
      "/Projects/project_3/5.PNG",
      "/Projects/project_3/6.png",
      "/Projects/project_3/7.PNG",
      "/Projects/project_3/8.PNG",
      "/Projects/project_3/9.PNG",
      "/Projects/project_3/10.PNG",
    ],
    title: "Ecommerce machich",
    skills: ["Next-js", "tailwind", "PHP", "Laravel", "MySQL", "API"],
    link: "https://movie-app-82b85.web.app/",
    desc_en_ar: {
      desc_en_pro_1:
        "A fully-featured online store with all possible services available in a store, customizable and extendable: ⭐️ Built on the (Next.js) framework for reliable front-end development. ⭐️ The back-end is built using the (Laravel) framework. Site Contents: Home Page | Products Page | Individual Product Page | Login Page | Registration Page | Shopping Cart Page | Dashboard for the latest site statistics. Tables in the site: Users Table | Categories Table | Products Table | Merchants Table. Each table has a dedicated page for adding (User - Category - Product - Merchant) with the ability to upload images for each new entry added.",
      desc_ar_pro_1:
        " متجر إلكترونى كامل الخدمات الممكن تواجدها فى متجر قابل للتعديل  والإضافة :⭐️ مبنى على إطار العمل (Next-js) للاعتماد علية فى إنشاء الواجهة الأمامية             ⭐️ الواجهة الخلفية مبنية بالاعتماد على إطار العمل (Laravel)      ⭐️ محتويات الموقع : -      - الصفحة الرئيسية | صفحة المنتجات | صفحة خاصة بكل منتج | صفحة تسجيل الدخول | صفحة إنشاء حساب | صفحة سلة المشتريات- لوحة تحكم لأخر إحصائيات الموقع ⭐️ الجداول الموجودة فى الموقع : -- جدول المستخدمين | جدول الأقسام | جدول المنتجات | جدول التجار  - يوجد لكل جدول صفحة خاصة لإضافة (مستخدم   - قسم  - منتج - تاجر ) مع امكانية رفع صور لكل صف جديد يتم اضافتة ",
    },
  },
  {
    images_src: [
      "/Projects/project_1/1.png",
      "/Projects/project_1/2.png",
      "/Projects/project_1/3.png",
      "/Projects/project_1/4.png",
      "/Projects/project_1/5.png",
      "/Projects/project_1/6.png",
      "/Projects/project_1/7.png",
      "/Projects/project_1/8.png",
      "/Projects/project_1/9.png",
    ],
    title: "Movies website",
    skills: ["React", "tailwind", "firebase", "API"],
    link: "https://movie-app-82b85.web.app/",
    desc_en_ar: {
      desc_en_pro_1:
        "A special site for displaying the latest movies and TV shows based on the TMDB API. It also contains a special page for each user that includes user data with the ability to place a personal photo and modify the account, in addition to having lists of what has been watched, in the waiting list, or in the favorites list. It also contains a login page and contains... An account creation page and the site is based on Google's Firebase system",
      desc_ar_pro_1:
        "موقع خاص بعرض أحدث الأفلام والبرامج التلفزيونية معتمد على TMDB API كما يحتوى على صفحة خاصة لكل مستخدم تتضمن بيانات المستخدم مع امكانية وضع صورة شخصية وتعديل الحساب بالاضافة لوجود قوائم لما تم مشاهدتة او فى قائمة الانتظار او فى قائمة المفضلات كما يحتوى على صفحة تسجيل دخول ويحتوى على صفحة انشاء حساب والموقع قائم على نظام firebase الخاص ب google",
    },
  },
  {
    images_src: [
      "/Projects/project_2/1.png",
      "/Projects/project_2/2.png",
      "/Projects/project_2/3.png",
      "/Projects/project_2/4.png",
      "/Projects/project_2/5.png",
      "/Projects/project_2/6.png",
      "/Projects/project_2/7.png",
      "/Projects/project_2/8.png",
      "/Projects/project_2/9.png",
      "/Projects/project_2/10.png",
      "/Projects/project_2/11.png",
      "/Projects/project_2/12.png",
    ],
    title: "SuperMarket with dashbord",
    skills: ["React", "tailwind", "firebase"],
    link: "https://fayek-market.web.app/",
    desc_en_ar: {
      desc_en_pro_1:
        "An integrated platform to meet the requirements of an online supermarket, as it contains a sliding list of offers that you can control from the control panel, where you can delete and add. You can also add sections and control them by adding and deleting, and you can add products and control them in terms of adding, erasing, and price, and uploading pictures of one product, and you can control Users from the control panel, so that everyone who has created an account appears to you, and you can delete or remove a user        ",
      desc_ar_pro_1:
        "منصة متكاملة لتلبية متطلبات سوبر ماركت اون لاين حيث تحتوى على قائمة عروض منزلقة تستطيع التحكم بها من لوحة التحكم حيث تستطيع المسح والاضافة كما تستطيع اضافة اقسام والتحكم فيها من إضافة ومسح وتستطيع اضافة منتجات والتحكم فيها من ناحية الاضافة والمسح والسعر ورفع صور للمنتج الواحد وتستطيع التحكم فى المستخدمين من لوحة التحكم بحيث يظهر لك كل من قام بانشاء حساب وتستطيع مسح او إضافة مستخدم",
    },
  },
];

export const directionMap: Record<string, "ltr" | "rtl"> = {
  en: "ltr",
  ar: "rtl",
};

export const skills = [
  {
    icon: "/icons/next.png",
    title: { ar: "Next-js", en: "Next-js" },
    desc: {
      ar: "أتقن أحدث إطارات العمل المبنية على React والصديقة لمحركات البحث.",
      en: "Mastered the latest React-based framework for building SEO-friendly, performant web applications.",
    },
    bg_color: "rgb(233, 30, 99)",
  },
  {
    icon: "/icons/php.png",
    title: { ar: "PHP", en: "PHP" },
    desc: {
      ar: "خبير في PHP، اللغة الأساسية لتطوير الواجهة الخلفية، وخاصة مع Laravel.",
      en: "Expert in PHP, the foundational language for backend development, especially with Laravel.",
    },
    bg_color: "rgb(63, 81, 181)",
  },
  {
    icon: "/icons/laravel.png",
    title: { ar: "Laravel", en: "Laravel" },
    desc: {
      ar: "متمكن من Laravel، أحد أشهر إطارات العمل القوية للواجهة الخلفية.",
      en: "Highly proficient in Laravel, one of the most popular and powerful PHP backend frameworks.",
    },
    bg_color: "rgb(233, 30, 99)",
  },
  {
    icon: "/icons/physics.png",
    title: { ar: "React", en: "React" },
    desc: {
      ar: "مهارات قوية في React، الإطار الأساسي لبناء تطبيقات واجهة أمامية ديناميكية.",
      en: "Strong skills in React, the core framework used for building dynamic and responsive frontend applications.",
    },
    bg_color: "rgb(63, 81, 181)",
  },
  {
    icon: "/icons/typescript.png",
    title: { ar: "TS", en: "TS" },
    desc: {
      ar: "بارع في TypeScript لكتابة جافاسكريبت أكثر قوة وقابلة للصيانة.",
      en: "Skilled in TypeScript to write more robust and maintainable JavaScript code with static typing.",
    },
    bg_color: "rgb(63, 81, 181)",
  },
  {
    icon: "/icons/sql.png",
    title: { ar: "MySQL", en: "MySQL" },
    desc: {
      ar: "خبرة في تصميم وإدارة قواعد بيانات MySQL للمشاريع الخلفية.",
      en: "Experienced in designing and managing relational databases using MySQL for backend projects.",
    },
    bg_color: "rgb(63, 81, 181)",
  },
  {
    icon: "/icons/Tailwind CSS.png",
    title: { ar: "Tailwind CSS", en: "Tailwind CSS" },
    desc: {
      ar: "متمكن من Tailwind CSS لتصميم واجهات مستخدم سريعة وقابلة للتخصيص.",
      en: "Proficient with Tailwind CSS for rapid and customizable UI design with utility-first classes.",
    },
    bg_color: "rgb(255, 152, 0)",
  },
  {
    icon: "/icons/js.png",
    title: { ar: "JS", en: "JS" },
    desc: {
      ar: "خبرة واسعة في JavaScript لإنشاء تجارب ويب تفاعلية وسهلة الاستخدام.",
      en: "Expertise in JavaScript to create interactive and user-friendly web experiences.",
    },
    bg_color: "rgb(255, 152, 0)",
  },

  {
    icon: "/icons/social.png",
    title: { ar: "Git", en: "Git" },
    desc: {
      ar: "متمكن من Git لإدارة النسخ البرمجية والتعاون الفعال في المشاريع.",
      en: "Proficient in Git version control to manage codebases and collaborate effectively.",
    },
    bg_color: "rgb(63, 81, 181)",
  },
  {
    icon: "/icons/command-line.png",
    title: { ar: "Command Line", en: "Command Line" },
    desc: {
      ar: "مرتبط باستخدام أدوات سطر الأوامر لتحسين سير العمل وأتمتة المهام.",
      en: "Comfortable using command line tools to improve workflow and automate tasks.",
    },
    bg_color: "rgb(233, 30, 99)",
  },
  {
    icon: "/icons/github.png",
    title: { ar: "GitHub", en: "GitHub" },
    desc: {
      ar: "خبرة في GitHub لاستضافة الأكواد وإدارة المشاريع والتعاون.",
      en: "Experienced with GitHub for code hosting, collaboration, and project management.",
    },
    bg_color: "rgb(255, 152, 0)",
  },
  {
    icon: "/icons/browser.png",
    title: { ar: "Use API", en: "Use API" },
    desc: {
      ar: "مهارة في دمج واستهلاك واجهات برمجة التطبيقات لعرض البيانات الديناميكية.",
      en: "Skilled in integrating and consuming APIs to fetch and display dynamic data efficiently.",
    },
    bg_color: "rgb(63, 81, 181)",
  },
  {
    icon: "/icons/backend.png",
    title: { ar: "Deal with backend", en: "Deal with backend" },
    desc: {
      ar: "القدرة على التعاون الفعال مع مطوري الواجهة الخلفية لتسليم حلول متكاملة.",
      en: "Able to collaborate effectively with backend developers to deliver integrated solutions.",
    },
    bg_color: "rgb(233, 30, 99)",
  },

  // المهارات الجديدة:
  {
    icon: "/icons/tan-stack.png",
    title: { ar: "TanStack Query", en: "TanStack Query" },
    desc: {
      ar: "خبير في إدارة حالة الخادم وجلب البيانات غير المتزامنة باستخدام TanStack Query في React.",
      en: "Expert in managing server state and asynchronous data fetching with TanStack Query for React.",
    },
    bg_color: "rgb(30, 136, 229)",
  },
  {
    icon: "/icons/zustand.jpg",
    title: { ar: "zustand", en: "zustand" },
    desc: {
      ar: "متمكن في zustand لإدارة الحالة العامة البسيطة والقابلة للتوسع في تطبيقات React.",
      en: "Skilled in zustand for simple and scalable global state management in React applications.",
    },
    bg_color: "rgb(0, 150, 136)",
  },
  {
    icon: "/icons/reduc-toolkit.png",
    title: { ar: "redux-toolkit", en: "redux-toolkit" },
    desc: {
      ar: "بارع في redux-toolkit لإدارة الحالة بطريقة فعالة وموحدة في Redux.",
      en: "Proficient in redux-toolkit for efficient and standardized Redux state management.",
    },
    bg_color: "rgb(244, 66, 54)",
  },
  {
    icon: "/icons/html-5.png",
    title: { ar: "HTML", en: "HTML" },
    desc: {
      ar: "معرفة قوية بـ HTML لبناء هيكل صفحات ويب معنوي وسهل الوصول.",
      en: "Strong knowledge of HTML for building semantic and accessible web page structures.",
    },
    bg_color: "rgb(233, 30, 99)",
  },
  {
    icon: "/icons/css-3.png",
    title: { ar: "CSS", en: "CSS" },
    desc: {
      ar: "مهارات متقدمة في CSS لتنسيق وتحسين مظهر واجهات الويب.",
      en: "Skilled in CSS for styling and enhancing the visual appearance of web interfaces.",
    },
    bg_color: "rgb(63, 81, 181)",
  },
  {
    icon: "/icons/media.png",
    title: { ar: "Bootstrap", en: "Bootstrap" },
    desc: {
      ar: "خبرة في Bootstrap لتصميم سريع ومتجاوب باستخدام إطار عمل CSS شامل.",
      en: "Experienced in Bootstrap for fast, responsive design with a comprehensive CSS framework.",
    },
    bg_color: "rgb(233, 30, 99)",
  },
];
