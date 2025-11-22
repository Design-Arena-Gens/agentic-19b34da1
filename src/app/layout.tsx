import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "مجموعة خبراء الذكاء | وكالة ذكاء اصطناعي متكاملة",
  description:
    "فريق واحد يجمع خبراء الذكاء الاصطناعي والتسويق والمبيعات لإطلاق المواقع، إدارة المنتجات الرقمية، وتشغيل خدمة العملاء والمدفوعات على مدار الساعة.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
