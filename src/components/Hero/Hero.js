"use client";
import { motion } from "framer-motion";
import image from "../../../public/image.jpeg";

export default function Hero() {
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
        className="w-full h-full bg-[#000000c9] absolute top-0 flex flex-col items-center justify-center">
        <div className="w-[70%] mt-[-150px] mb-10">
          <h1
            className={`text-2xl text-[#6d73ec] text-center md:text-3xl inline-block p-3 mb-3`}>
            "Issiq suv va issiqlik taʼminotidagi barqarorlik – aholining
            hayotdan rozi boʼlishini taʼminlovchi muhim omil"
          </h1>
          <p className="text-[#ffffff] text-xl text-end italic capitalize">
            Sh.M. Mirziyoyev
          </p>
        </div>
        <p className="hero-desc text-[white] text-2xl md:text-7xl font-medium mb-5">
          "Qirguli Issiqlik Manbai"
        </p>
        <p className="text-[#6d73ec] text-2xl md:text-4xl font-medium">
          Mas'uliyati cheklangan jamiyat
        </p>
      </motion.div>
    </motion.section>
  );
}
