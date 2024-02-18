import "./globals.css";
import { Roboto_Slab } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { ReduxProvider } from "@/redux/provider";

const font = Roboto_Slab({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Qirguli issiqlik manbai",
  description:
    "«Qirguli Issiqlik Manbai» Mas'uliyati Cheklangan Jamiyati O'zbekiston Respublikasi Bosh Vazirining 2005-yil 20-sentyabr kungi yig'ilish qarori va Farg'ona viloyati xokimining 2005-yil 25-noyabr kungi qaroriga asosan Farg'ona viloyati «Issiqlik manbai» ishlab chiqarish boshqarmasining Farg'ona shahar Qirguli mavzesi uchastkazi baʼzasida tashkil qilingan. Farg'ona shahar xokimligida 16.09.2005 yil kuni №848-son bilan ro'yxatdan o'tkazilgan. Jamiyatimiz barcha issiqlik energiyasini 'IES' AJ Farg'ona IEM filialidan sotib oladi. Jamiyatimiz bugungi kunda 317 dona ko'p qavatli uylarga (16654 dona iste'molchi) issiq suv yetkazib beradi. Ulgurji iste'molchilar uchun 1 Gkal - 416.472 so'm (QQS-siz): Issiq suv uchun odam soniga - 27724 so'm, hisob bo'yicha 1 m3 - 4404 so'm.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body className={font.className}>
        <Header />
        <ReduxProvider>
          <main>{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
