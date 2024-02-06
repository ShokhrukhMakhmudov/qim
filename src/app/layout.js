import "./globals.css";
import { Roboto_Slab } from "next/font/google";

const font = Roboto_Slab({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Qirguli issiqlik manbai",
  description: "Qirguli issiqlik manbai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body className={font.className}>{children}</body>
    </html>
  );
}
