"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Fondamento } from "next/font/google";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TECHNOLOGIES } from "../Images";
// const logoFont = Fondamento({ subsets: ["latin"], weight: "400" });

const Production = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const settings = {
    className: "",
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: TECHNOLOGIES.length,
    autoplay: true,
    speed: 40000,
    autoplaySpeed: 100,
    cssEase: "linear",
    pauseOnHover: true,
  };

  return (
    <motion.section
      id="production"
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="py-8">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto text-center mb-10">
          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ishlab chiqarish
          </p>
        </div>

        <div className="bg-primary p-10 flex flex-col gap-10 w-full mb-10">
          <p className="text-center text-2xl text-white text-opacity-90">
            Ko'p darajali nazorat va zamonaviy texnologiyalar yuqori sifatli
            unni olish imkonini beradi!
          </p>
        </div>
        <div className="w-full overflow-hidden py-5 border-y-4 border-primary">
          <Slider {...settings}>
            {TECHNOLOGIES.map((_, ind) => {
              return (
                <img
                  key={ind}
                  className="block pe-5 hover:scale-125 transition-all object-cover object-center w-[200px] h-[120px] sm:w-[300px] sm:h-[220px]"
                  src={TECHNOLOGIES[ind].src}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </motion.section>
  );
};

export default Production;
