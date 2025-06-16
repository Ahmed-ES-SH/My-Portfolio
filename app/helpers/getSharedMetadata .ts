/* eslint-disable @typescript-eslint/no-explicit-any */
export const getSharedMetadata = (locale: "en" | "ar", translations: any) => ({
  keywords: [
    "Full Stack Developer",
    "مطور ويب",
    "مطور Laravel",
    "مطور Next.js",
    "موقع شخصي",
    "تصميم مواقع",
    "تطوير تطبيقات الويب",
    "React Developer",
    "مطور واجهات وخلفية",
    "Portfolio Developer",
  ],
  openGraph: {
    title: translations.title,
    description: translations.description,
    url: `https://ahmedismail.vercel.app/en/${locale}`,
    siteName: "My Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt:
          locale === "ar"
            ? "موقع شخصي لمطور Full Stack"
            : "Full Stack Developer Personal Website",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: translations.title,
    description: translations.description,
    image: "/logo.png",
  },
});
