import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://joechang28.github.io/wedding-decor-comparison/"),
  title: "婚禮佈置提案比較｜好醉工作室 × 芮希",
  description: "完整比較兩家婚禮佈置公司的作品風格、主景方案、加購項目、價格與適用情境。",
  openGraph: {
    title: "婚禮佈置提案比較｜好醉工作室 × 芮希",
    description: "作品風格、主景方案、加購項目與價格，一頁看懂。",
    images: ["https://joechang28.github.io/wedding-decor-comparison/og.png"],
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "婚禮佈置提案比較｜好醉工作室 × 芮希",
    description: "作品風格、主景方案、加購項目與價格，一頁看懂。",
    images: ["https://joechang28.github.io/wedding-decor-comparison/og.png"],
  },
  icons: {
    icon: "/wedding-decor-comparison/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
