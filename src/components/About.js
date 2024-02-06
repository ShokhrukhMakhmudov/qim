"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FcPlus } from "react-icons/fc";
import BackgroundVideo from "./BackgroundVideo/index";
import { Fondamento } from "next/font/google";
import { WHEATS } from "./Images";
const logoFont = Fondamento({ subsets: ["latin"], weight: "400" });

const About = () => {
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
      className="py-10 md:py-20">
      <div className="container mx-auto px-6 lg:px-8 relative">
        <img
          className="absolute left-0"
          src={WHEATS[0].src}
          alt="wheat"
          width={128}
        />
        <img
          className="absolute right-0"
          src={WHEATS[0].src}
          alt="wheat"
          width={128}
        />
        <img
          className="absolute bottom-[-80px] right-0 rotate-180"
          src={WHEATS[0].src}
          alt="wheat"
          width={128}
        />
        <img
          className="absolute bottom-[-80px] left-0 rotate-180"
          src={WHEATS[0].src}
          alt="wheat"
          width={128}
        />
        <div className="mx-auto text-center mb-10">
          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Biz haqimizda
          </p>
        </div>
        <section className="w-full relative">
          <BackgroundVideo />
          <div className="absolute bg-[#000000a2] top-0 bottom-0 left-0 right-0 flex items-center justify-center">
            <div className="text-white w-full p-3 sm:w-3/5 sm:text-center">
              <h1
                className={`${logoFont.className} text-[#000] text-sm md:text-4xl bg-primary inline-block p-1 sm:p-3 sm:mb-3`}>
                Grand Mill Group
              </h1>
              <p className="hero-desc text-[white] text-[10px] sm:text-xs md:text-xl lg:text-2xl font-medium">
                {/* Birinchi navli bug'doy uni */}
                "Grand Mill Group" -bu O`zbekistondagi eng zamonaviy
                tegirmonlardan biri bo`lib, o`z mahsulotlarini dunyoning eng
                zamonaviy ,jahon standartlariga to`liq javob beradigan
                texnologiyalar yordamida ishlab chiqaradi.Bu tegirmonimiz
                sutkasiga 200 tonna bug`doyni qayta ishlash uchun mo`jallangan
                bo`lib O`rta Osiyoda tajribaga ega bolgan "IMAS MAKINA" turk
                firmasi texnikalaridan qurilgan va 2023 yil boshidan o`z ish
                faolyatini boshladi.
              </p>
            </div>
          </div>
        </section>
      </div>
    </motion.section>
  );
};

export default About;
