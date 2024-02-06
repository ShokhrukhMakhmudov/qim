"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Div from "./Div";
import { BsInstagram, BsYoutube, BsTelegram } from "react-icons/bs";

const Footer = () => {
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
      className="bg-secondary py-8">
      <div className="container ">
        <div className="flex flex-col-reverse gap-10 lg:flex-row items-center justify-between">
          <div>
            <Link
              target="_blank"
              href="https://t.me/shox_dev"
              className="footer-logo hover:text-primary ">
              <Div />
              <span className="text-3xl font-semibold">DIV</span>
              <span className="text-2xl">Sayt yaratish</span>
            </Link>
          </div>
          <div className="flex items-center gap-5 lg:gap-10 text-white">
            <Link href="#" className="text-2xl hover:text-primary">
              <BsTelegram />
            </Link>
            <Link href="#" className="text-2xl hover:text-primary">
              <BsInstagram />
            </Link>
            <Link
              href="https://www.youtube.com"
              className="text-2xl hover:text-primary">
              <BsYoutube />
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
