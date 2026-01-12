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

export const categoryLabels: Record<string, { en: string; ar: string }> = {
  frontend: { en: "Frontend", ar: "واجهة أمامية" },
  backend: { en: "Backend", ar: "واجهة خلفية" },
  fullstack: { en: "Fullstack", ar: "متكامل" },
};
