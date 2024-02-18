"use client";
import { motion } from "framer-motion";
import image from "../../../public/image.jpeg";
function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="hero lg:h-[680px] overflow-hidden relative">
      <img src={image.src} alt="bg" />
      <motion.div
        initial={{ translateX: "-300%" }}
        animate={{ translateX: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="w-full h-full bg-[#00000071] absolute top-0 flex flex-col items-center justify-center">
        <h1 className={`text-8xl text-white md:text-9xl inline-block p-3 mb-3`}>
          2005
        </h1>
        <p className="hero-desc text-[white] text-2xl md:text-3xl font-medium">
          "Qirguli Issiqlik Manbai" MCHJ
        </p>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
// Обработка металлов и нанесение покрытий на металлы
