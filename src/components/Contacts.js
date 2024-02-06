"use client";
import { useAnimation, useInView, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

function Contacts() {
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
      <div className="container">
        <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-16">
          Biz bilan bog'lanish
        </h2>
        <div className="flex flex-col gap-10 lg:flex-row justify-between">
          <div className="bg-secondary p-5 sm:p-10 flex flex-col gap-10 w-full lg:w-1/2 ">
            <div className="text-primary text-xl sm:text-2xl font-medium border-b-2">
              <p>Email:</p>
              <p className="text-white">qirguliissiqlikmanbai@gmail.com</p>
            </div>
            <div className="text-primary flex flex-col text-xl sm:text-2xl font-medium  border-b-2">
              <p>Telefon raqamlar:</p>
              <Link
                href="tel:+998970422525"
                className="text-white hover:text-primary">
                +998 97 042 25 25
              </Link>
              {/* <Link
                href="tel:+998902746000"
                className="text-white hover:text-primary">
                +998 90 274 60 00
              </Link>
              <Link
                href="tel:+998939739009"
                className="text-white hover:text-primary">
                +998 93 973 90 09
              </Link> */}
            </div>
            <div className="text-primary text-xl sm:text-2xl font-medium border-b-2">
              <p>Manzil:</p>
              <p className="text-white">
                Farg'ona viloyati, Farg'ona shahar,
                <br /> Kokalamzor ko'chasi 5-uy
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <iframe
              className="w-full h-[300px] sm:h-[450px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d944.9217166326234!2d71.75993605092437!3d40.44425716238993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb9dbc283a5db5%3A0xd65cb458a42c5d39!2z0JrQuNGA0LPQuNC70Lgg0JjRgdGB0LjQuiDQodGD0LIg0YLQsNGK0LzQuNC90L7Rgg!5e1!3m2!1sru!2s!4v1707236792500!5m2!1sru!2s"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contacts;
