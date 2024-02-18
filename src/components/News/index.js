"use client";
import { useEffect, useRef } from "react";
import Carousel from "./slider";
import { motion, useAnimation, useInView } from "framer-motion";
import image from "../../../public/image-1.jpg";
import { useSelector } from "react-redux";

function News() {
  const { news } = useSelector((state) => state.dataReducer);

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
      className="mt-10 mb-10"
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.5 }}>
      <div className="container">
        <div className="mx-auto text-center mb-10">
          <p className="text-2xl text-secondary font-bold tracking-tight text-gray-900 sm:text-4xl">
            So'ngi Yangiliklar
          </p>
        </div>
        {news ? (
          <div className="flex gap-10 justify-center">
            {news.map(({ images, date, title }, ind) => {
              return (
                <div className="max-w-[360px]" key={ind}>
                  <Carousel images={images} />
                  <p className="px-2 py-1 bg-[#dfdfdf] rounded-sm inline-block">
                    {date}
                  </p>
                  <h3 className="mt-4 text-lg md:text-xl">{title}</h3>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <img src="/loader200.gif" alt="loader" />
          </div>
        )}
      </div>
    </motion.section>
  );
}

export default News;
