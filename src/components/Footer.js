"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useSelector } from "react-redux";
import Link from "next/link";
import Div from "./Div";

const Footer = () => {
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
    <motion.footer
      id="contacts"
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bg-secondary py-7">
      <div className="container ">
        <div className="flex flex-col-reverse gap-10 lg:flex-row items-center justify-between">
          <Link href="/" className="text-white text-center lg:text-left">
            © 2024 "Qirguli issiqlik manbai" MCHJ <br /> Barcha xizmatlar
            litsenziyalangan.
          </Link>
          <div className="text-primary text-center text-lg sm:text-xl font-medium border-b-2">
            {/* <p>Elektron manzil:</p> */}
            <p className="text-white">qirguliissiqlikmanbai@gmail.com</p>
          </div>
          {about && (
            <div className="text-primary text-center text-lg sm:text-xl font-medium border-b-2">
              {/* <p>Telefon raqam:</p> */}
              <Link
                href="tel:+998908480909"
                className="text-white hover:text-primary">
                {about[1]?.content}
              </Link>
            </div>
          )}
          <div>
            <Link
              href="https://t.me/shox_dev"
              target="_blank"
              className="flex gap-2 div-logo text-white">
              <Div color={"#fff"} />
              <div>
                <p>
                  Developed by <br /> <b>DIV-Group</b>
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
