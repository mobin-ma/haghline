import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/ProvidersStore";
import Alert from "@/components/Alert";

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
    <html lang="en" dir="rtl">
      <Providers>
        <body className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white transition-colors duration-1000">
          <Alert />
          {children}
        </body>
      </Providers>
    </html>
  );
}
