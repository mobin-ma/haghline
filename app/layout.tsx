import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/ProvidersStore";
import Alert from "@/components/Alert";
import localFont from "next/font/local"

const iranSans = localFont(
  {src: [
    {path: "../fonts/IRANSansWeb_UltraLight.woff2", weight: "100", style: "normal"},
    {path: "../fonts/IRANSansWeb_Light.woff2", weight: "300", style: "normal"},
    {path: "../fonts/IRANSansWeb_Medium.woff2", weight: "500", style: "normal"},
    {path: "../fonts/IRANSansWeb_Bold.woff2", weight: "700", style: "normal"},
    {path: "../fonts/IRANSansWeb_Black.woff2", weight: "900", style: "normal"},
  ],
  },
);

export const metadata: Metadata = {
  title: "حق لاین - پلتفرم حقوقی آنلاین",
  description: "ارتباط مستقیم کاربران با وکلا و مشاوران حقوقی",
  openGraph: {
    title: "حق لاین",
    description: "پلتفرم آنلاین مشاوره حقوقی",
    url: "https://haghline.com",
    siteName: "Haghline",
    locale: "fa_IR",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={iranSans.className}>
      <Providers>
        <body className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white transition-colors duration-1000">
          <Alert />
          {children}
        </body>
      </Providers>
    </html>
  );
}
