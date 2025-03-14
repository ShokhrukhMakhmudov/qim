"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useSelector } from "react-redux";

export const metadata = {
  title: "Qirguli issiqlik manbai MCHJ",
  description:
    "«Qirguli Issiqlik Manbai» Mas'uliyati Cheklangan Jamiyati O'zbekiston Respublikasi Bosh Vazirining 2005-yil 20-sentyabr kungi yig'ilish qarori va Farg'ona viloyati xokimining 2005-yil 25-noyabr kungi qaroriga asosan Farg'ona viloyati «Issiqlik manbai» ishlab chiqarish boshqarmasining Farg'ona shahar Qirguli mavzesi uchastkazi baʼzasida tashkil qilingan. Farg'ona shahar xokimligida 16.09.2005 yil kuni №848-son bilan ro'yxatdan o'tkazilgan. Jamiyatimiz barcha issiqlik energiyasini 'IES' AJ Farg'ona IEM filialidan sotib oladi. Jamiyatimiz bugungi kunda 317 dona ko'p qavatli uylarga (16654 dona iste'molchi) issiq suv yetkazib beradi. Ulgurji iste'molchilar uchun 1 Gkal - 416.472 so'm (QQS-siz): Issiq suv uchun odam soniga - 27724 so'm, hisob bo'yicha 1 m3 - 4404 so'm.",
};

const About = () => {
  const { about } = useSelector((state) => state.dataReducer);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.section
      id="about"
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bg-secondary py-10 md:py-20 mt-10">
      <div className="container mx-auto px-6 lg:px-8 ">
        {!about ? (
          <div className="flex items-center justify-center">
            <img src="/loader200.gif" alt="loader" />
          </div>
        ) : (
          <section className="w-full flex flex-col sm:flex-row items-center justify-center lg:justify-between">
            <div>
              <div className="mx-auto text-center mb-10">
                <p className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
                  Biz haqimizda
                </p>
              </div>
              <div className="text-white w-full">
                <p className="max-w-[620px] text-[white] text-[10px] sm:text-xs md:text-xl lg:text-xl font-medium text-justify ">
                  &nbsp;{" "}
                  {about[0].content ??
                    "«Qirguli Issiqlik Manbai» Mas'uliyati Cheklangan Jamiyati O'zbekiston Respublikasi Bosh Vazirining 2005-yil 20-sentyabr kungi yig'ilish qarori va Farg'ona viloyati xokimining 2005-yil 25-noyabr kungi qaroriga asosan Farg'ona viloyati «Issiqlik manbai» ishlab chiqarish boshqarmasining Farg'ona shahar Qirguli mavzesi uchastkazi baʼzasida tashkil qilingan. Farg'ona shahar xokimligida 16.09.2005 yil kuni №848-son bilan ro'yxatdan o'tkazilgan. Jamiyatimiz barcha issiqlik energiyasini 'IES'AJ Farg'ona IEM filialidan sotib oladi. Jamiyatimiz bugungi kunda 317 dona ko'p qavatli uylarga (16654 dona iste'molchi) issiq suv yetkazib beradi. Bizdan yuqori turuvchi tashkilotlar Qurilish va uy-joy kommunal xo'jaligi vazirligi Farg'ona viloyati boshqarmasi hamda O'zbekiston Respublikasi Davlat aktivlarini boshqarish agentligi Farg'ona viloyati hududiy boshqarmasi."}{" "}
                  <br /> <br />
                </p>
                <p className="max-w-[620px] text-[#c5c5c5] text-[10px] sm:text-xs md:text-xl lg:text-xl font-medium text-justify ">
                  {about[0]?.subtitle ??
                    "Issiq suv narxlari quyidagilarni tashkil qiladi: 1 Gkall ulgurji iste’molchilar uchun 466448.6 so'm (QQS bilan); 1 Gkall aholi uchun 88088 so'm (QQS bilan); Shu jumladan aholiga: Issiqlik energiyasi (otaplenya) 1 m² uchun bir kuniga 152.3 so'm (QQS bilan) Issiq suv 1 m³ uchun 4932.4 so'm (QQS bilan) Odam soni bir kishi uchun 31051 so'm (QQS bilan)."}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <img
                className="hidden lg:block"
                src={"/logo-dark.png"}
                alt="site logo"
                width={502}
                height={322}
              />
              <div className="flex flex-col text-center text-2xl font-[500] text-[#df2525]">
                <p>Avariya navbatchilik xizmati:</p>
                <a className="hover:text-primary" href="tel:+998908480909">
                  +998 90 848 09 09
                </a>
              </div>

              <div className="flex flex-col text-center text-2xl font-[500] text-[#ffffff]">
                <p>Ish vaqti:</p>
                <p>Dushanba - Juma: 08:00 - 17:00</p>
                <p>Tushlik: 12:00 - 13:00</p>
              </div>
            </div>
          </section>
        )}
      </div>
    </motion.section>
  );
};

export default About;
