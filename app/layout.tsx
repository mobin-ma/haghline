import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/ProvidersStore";
import Alert from "@/components/Alert";
import ThemeToggle from "@/components/ThemeToggle";

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
        <body>
          <Alert />
          <nav className="p-4 flex justify-end">
            <ThemeToggle />
          </nav>
          {children}
        </body>
      </Providers>
    </html>
  );
}
