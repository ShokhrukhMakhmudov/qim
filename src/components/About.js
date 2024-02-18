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
  console.log(about);
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
          <section className="w-full flex items-center justify-center lg:justify-between">
            <div>
              <div className="mx-auto text-center mb-10">
                <p className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
                  Biz haqimizda
                </p>
              </div>
              <div className="text-white w-full">
                <p className="max-w-[620px] text-[white] text-[10px] sm:text-xs md:text-xl lg:text-xl font-medium text-justify ">
                  &nbsp; {about[0].content} <br /> <br />
                </p>
                <p className="max-w-[620px] text-[#c5c5c5] text-[10px] sm:text-xs md:text-xl lg:text-xl font-medium text-justify ">
                  Ulgurji iste'molchilar uchun 1 Gkal - 416.472 so'm (QQS-siz):
                  Issiq suv uchun odam soniga - 27724 so'm, hisob bo'yicha 1 m
                  <sup>3</sup> - 4404 so'm.
                </p>
              </div>
            </div>

            <img
              className="hidden lg:block"
              src={"/logo-dark.png"}
              alt="site logo"
              width={502}
              height={322}
            />
          </section>
        )}
      </div>
    </motion.section>
  );
};

export default About;
