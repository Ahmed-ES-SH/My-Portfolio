import { ReactNode } from "react";
import { Cairo } from "next/font/google";
import { Inter } from "next/font/google";
import ContactMe from "./_components/_global/ContactMe";
import ClientLayout from "./_components/_global/ClientLayout";
import AnimateBackGround from "./_components/_global/AnimateBackGround";
import Navbar from "./_components/_global/Navbar";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "700"],
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  weight: ["400", "500", "700"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <body
        className={`${inter.variable} ${cairo.variable} font-sans antialiased`}
      >
        <ClientLayout>
          <AnimateBackGround />
          <ContactMe />
          <Navbar />
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
