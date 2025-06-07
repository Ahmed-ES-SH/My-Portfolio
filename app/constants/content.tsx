import {
  LuCodeXml,
  LuFolderKanban,
  LuHouse,
  LuSquareUserRound,
} from "react-icons/lu";

export const links = [
  {
    title: { en: "Home", ar: "الرئيسية" },
    link: "/",
    icon: LuHouse,
  },
  {
    title: { en: "About me", ar: "من أنا" },
    link: "/Aboutme",
    icon: LuSquareUserRound,
  },
  {
    title: { en: "Skills", ar: "المهارات" },
    link: "/Skills",
    icon: LuCodeXml,
  },
  {
    title: { en: "My Projects", ar: "مشاريعي" },
    link: "/myprojects",
    icon: LuFolderKanban,
  },
];

export const contet_EN = {
  head_1: "Hi , i'm",
  head_2: "Ahmed Esmail ,",
  p: (
    <p className="text-gray-200 text-[32px] max-sm:text-[30px] max-sm:W-full">
      A passionate
      <span className="text-green-400 px-2 ">
        {"<Frontend Web Development />"}
      </span>
      creating user frindly websites
    </p>
  ),
};
export const contet_AR = {
  head_1: "أهلا , أنا  ",
  head_2: "أحمد إسماعيل  ,",
  p: (
    <p className="text-gray-200 text-[32px]">
      أنا شخص ك
      <span className="text-green-400 px-2 ">
        {"<مطور واجهة امامية للمواقع  />"}
      </span>
      شغوف بإنشاء مواقع سهلة الإستخدام وذات أعلى كفاءة
    </p>
  ),
};

export const messages_EN = {
  first_title: "Best Quality",

  secend_title: "Resposive design",
};
export const messages_AR = {
  first_title: "أفضل جودة ",

  secend_title: " تصميم متجاوب  ",
};

export const about_en = {
  name: "Ahmed Esmail",
  first_title: "About",
  secend_title: "Turn visions into Exceptional aspirations",
  tird_title:
    "i am frontend developer passionate about my work is like an artist painting a masterpiece with code. Their love for the craft drives them to create visually stunning and user-friendly interfaces that captivate and delight users. What sets me apart is my unwavering dedication to continuous learning, always seeking new technologies and techniques to stay ahead in the ever-evolving world of web development.",
};
export const about_Ar = {
  name: " أحمد إسماعيل ",
  first_title: " بشأنى ",
  secend_title: " تحويل الرؤى الى تطلعات استثنائية ",
  tird_title:
    "أنا مطور واجهة أمامية شغوف بعملي مثل فنان يرسم تحفة فنية باستخدام الكود. يدفعهم حبهم للحرفة إلى إنشاء واجهات مذهلة بصريًا وسهلة الاستخدام تأسر المستخدمين وتسعدهم. ما يميزني هو تفاني الذي لا يتزعزع في التعلم المستمر، والبحث دائمًا عن تقنيات وتقنيات جديدة للبقاء في المقدمة في عالم تطوير الويب المتطور باستمرار.",
};

export const skill_titles = {
  ar_title: " مهاراتى ",
  ar_secend_title: " جميع مهاراتى التى أستخدمها ",
  en_secend_title: " All my skills that I use  ",
  en_title: "my skills",
};
export const work_titles = {
  ar_title: " أعمالى ",
  ar_secend_title: " مشاريع قمت ببنائها ",
  en_secend_title: " Projects I have done  ",
  en_title: "My projects  ",
};

export const skills_ar = [
  {
    icon: "icons/next.png",
    title: "Next-js",
    desc: " أحدث إطارات العمل المبنية على react والصديقة لمحركات البحث ",
    bg_color: "rgb(233, 30, 99)",
  },

  {
    icon: "icons/php.png",
    title: " PHP ",
    desc: " اللفة الأساسية المستخدمة فى بناء إطار العمل Laravel ",
    bg_color: "rgb(63, 81, 181)",
  },
  {
    icon: "icons/laravel.png",
    title: " Laravel ",
    desc: "أحد أشهر إطارات العمل المستخدمة فى بناء نظام الواجهة الخلفية",
    bg_color: "rgb(233, 30, 99)",
  },
  {
    icon: "icons/physics.png",
    title: "React",
    desc: "   إطار العمل الذى اعتمد علية فى بناء مشاريعى ",
    bg_color: "rgb(63, 81, 181)",
  },
  {
    icon: "icons/typescript.png",
    title: "TS",
    desc: " جعل لغة ال JS أكثر تكاملا ",
    bg_color: "rgb(63, 81, 181)",
  },
  {
    icon: "icons/sql.png",
    title: "  MySQL ",
    desc: "قاعدة البيانات التى اعتمد عليها فى بناء مشاريع الواجهة الخلفية  ",
    bg_color: "rgb(63, 81, 181)",
  },
  {
    icon: "icons/Tailwind CSS.png",
    title: "Tailwind CSS ",
    desc: "  مكتبة خاصة بلغة css تسهل عملية بناء المنصة ولكن مع اعطاء حريات اكثر ",
    bg_color: "rgb(255, 152, 0)",
  },
  {
    icon: "icons/js.png",
    title: "JS",
    desc: " إضافة التفاعلات بين المستخدم والمنصة وبناء الأفكار الخاصة وتطبيقها   ",
    bg_color: "rgb(255, 152, 0)",
  },
  {
    icon: "icons/html-5.png",
    title: "HTML",
    desc: " بناء الهيكل العظمى الخاص بالموقع ",
    bg_color: "rgb(233, 30, 99)",
  },
  {
    icon: "icons/css-3.png",
    title: "CSS",
    desc: " تنسيق الهيكل العظمى واضافة جماليات الجسد المرئى  ",
    bg_color: "rgb(63, 81, 181)",
  },

  {
    icon: "icons/media.png",
    title: "Bootstrap",
    desc: "  مكتبة خاصة بلغة CSS تسهل عملية بناء المنصة  ",
    bg_color: "rgb(233, 30, 99)",
  },

  {
    icon: "icons/social.png",
    title: "Git  ",
    desc: " العمل على المشاريع الكبيرة مع الفرق باريحية   ",
    bg_color: "rgb(63, 81, 181)",
  },
  {
    icon: "icons/command-line.png",
    title: "command line  ",
    desc: " القدرة على استخدام اوامر Commend line  ",
    bg_color: "rgb(233, 30, 99)",
  },
  {
    icon: "icons/github.png",
    title: "GitHup  ",
    desc: "  القدرة على التعامل مع المشروع وملفات المشروع بطريقة سحابية ",
    bg_color: "rgb(255, 152, 0)",
  },
  {
    icon: "icons/browser.png",
    title: "Use API  ",
    desc: "  القدرة على التعامل مع APIS وإستخدامها لعرض البيانات الت توفرها  ",
    bg_color: "rgb(63, 81, 181)",
  },
  {
    icon: "icons/backend.png",
    title: "Deal with backend  ",
    desc: "  التعامل مع مطور الواجهة الخلفية لإنهاء المشروع بطريقة مثالية   ",
    bg_color: "rgb(233, 30, 99)",
  },
];
export const skills_en = [
  {
    icon: "icons/next.png",
    title: "Next-js",
    desc: " The latest react-based, SEO-friendly frameworks ",
    bg_color: "rgb(233, 30, 99)",
  },
  {
    icon: "icons/php.png",
    title: " PHP ",
    desc: "  The primary language used to build the Laravel framework    ",
    bg_color: "rgb(63, 81, 181)",
  },
  {
    icon: "icons/laravel.png",
    title: " Laravel ",
    desc: "One of the most popular frameworks used in building the backend.",
    bg_color: "rgb(233, 30, 99)",
  },
  {
    icon: "icons/physics.png",
    title: "React",
    desc: "   The framework through which players build projects    ",
    bg_color: "rgb(63, 81, 181)",
  },
  {
    icon: "icons/typescript.png",
    title: "TS",
    desc: " Make the JS language more integrated    ",
    bg_color: "rgb(63, 81, 181)",
  },
  {
    icon: "icons/sql.png",
    title: "  MySQL ",
    desc: "The database that I relied on to build back-end projects. ",
    bg_color: "rgb(63, 81, 181)",
  },
  {
    icon: "icons/Tailwind CSS.png",
    title: "Tailwind CSS ",
    desc: "  A special library for the CSS language that facilitates the process of building the platform, but while giving more freedoms    ",
    bg_color: "rgb(255, 152, 0)",
  },
  {
    icon: "icons/js.png",
    title: "JS",
    desc: " Adding interactions between the user and the platform and building and implementing own ideas    ",
    bg_color: "rgb(255, 152, 0)",
  },
  {
    icon: "icons/html-5.png",
    title: "HTML",
    desc: " Building your site's skeleton ",
    bg_color: "rgb(233, 30, 99)",
  },
  {
    icon: "icons/css-3.png",
    title: "CSS",
    desc: " Coordinating the skeleton and adding aesthetics to the visual body    ",
    bg_color: "rgb(63, 81, 181)",
  },

  {
    icon: "icons/media.png",
    title: "Bootstrap",
    desc: "  A special library for the CSS language that facilitates the process of building the platform    ",
    bg_color: "rgb(233, 30, 99)",
  },

  {
    icon: "icons/social.png",
    title: "Git  ",
    desc: " Work on large projects with teams comfortably    ",
    bg_color: "rgb(63, 81, 181)",
  },
  {
    icon: "icons/command-line.png",
    title: "command line  ",
    desc: " Ability to use Commend line commands    ",
    bg_color: "rgb(233, 30, 99)",
  },
  {
    icon: "icons/github.png",
    title: "GitHup  ",
    desc: "  Ability to handle project and project files in a cloud-based manner    ",
    bg_color: "rgb(255, 152, 0)",
  },
  {
    icon: "icons/browser.png",
    title: "Use API  ",
    desc: "  The ability to deal with APIS and use them to display the data they provide    ",
    bg_color: "rgb(63, 81, 181)",
  },
  {
    icon: "icons/backend.png",
    title: "Deal with backend  ",
    desc: "  Dealing with the backend developer to finish the project in a perfect way    ",
    bg_color: "rgb(233, 30, 99)",
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

export const education = {
  ar: " خريج كلية الأداب بجامعة الزقازيق الموجودة فى مصر ",
  en: "Graduate of the Faculty of Arts at Zagazig University in Egypt  ",
  title_ar: " المؤهل   ",
  title_en: " Qualification",
  secend_title_ar: " المؤهل الدراسى  ",
  secend_title_en: "Educational Qualification",
};
