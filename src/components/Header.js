"use client";
import logo from "../../public/logo.png";
import { motion } from "framer-motion";
import Link from "next/link";
import Sidebar from "./Sidebar/Sidebar";
import { Fondamento } from "next/font/google";

const logoFont = Fondamento({ subsets: ["latin"], weight: "400" });

function Header() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        duration: 2,
      },
    },
  };

  const item = {
    hidden: { display: 0 },
    show: { opacity: 1 },
  };
  return (
    <>
      <motion.div
        id="header"
        variants={container}
        initial="hidden"
        animate="show"
        className="bg-white mb-5 shadow-[0_1px_30px_-15px_#023059]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
          <div className="flex lg:flex-1">
            <Link
              href="#header"
              variants={item}
              className="-m-1.5 p-1.5 flex items-center gap-2 ">
              <img src={logo.src} alt="logo" width={72} />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <Sidebar />
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link
              variants={item}
              href="#products"
              className="text-lg font-medium hover:text-primary leading-6 text-gray-900">
              Yangiliklar
            </Link>
            <Link
              variants={item}
              href="#about"
              className="text-lg font-medium hover:text-primary leading-6 text-gray-900">
              Biz haqimizda
            </Link>
            <Link
              variants={item}
              href="#production"
              className="text-lg font-medium hover:text-primary leading-6 text-gray-900">
              Hujjatlar
            </Link>
            <Link
              variants={item}
              href="#contacts"
              className="text-lg font-medium hover:text-primary leading-6 text-gray-900">
              Kontaktlar
            </Link>
          </div>
        </nav>
      </motion.div>
    </>
  );
}

export default Header;
