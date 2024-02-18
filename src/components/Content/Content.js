"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Accordion from "./Accordion";
import { useSelector } from "react-redux";
import { FaUserTie, FaRegClock, FaPhone } from "react-icons/fa";
import { FaUserTie as FaUsertie } from "react-icons/fa6";

function Tariflar() {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className="px-10 py-4 flex items-start justify-between">
      <p>
        Ulgurji iste'molchilar uchun 1 Gkal - 416.472 so'm (QQS-siz): Issiq suv
        uchun odam soniga - 27724 so'm, hisob bo'yicha 1 m<sup>3</sup> - 4404
        so'm.
      </p>
      {/* <div className="flex flex-col gap-4">
        <button
          className="hover:text-primary"
          onClick={() => {
            setActiveItem(1);
          }}></button>
        <button
          className="hover:text-primary"
          onClick={() => {
            setActiveItem(2);
          }}>
          Tarif-2
        </button>
        <button
          className="hover:text-primary"
          onClick={() => {
            setActiveItem(3);
          }}>
          Tarif-3
        </button>
      </div>

      {activeItem === 0 ? (
        <div>
          {"<--"} Biz sizga quydagi tariflarni <br /> {"<--"}tafsiya qilamiz
        </div>
      ) : (
        <div> Tarif - {activeItem}</div>
      )} */}
    </div>
  );
}

export default function Content() {
  const { laws } = useSelector((state) => state.dataReducer);

  const [accordionItems, setAccordionItems] = useState([
    {
      isOpen: false,
    },
    {
      isOpen: false,
    },
    {
      isOpen: false,
    },
  ]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const toggleAccordionItem = (index) => {
    const updatedAccordionItems = [...accordionItems];
    updatedAccordionItems[index].isOpen = !updatedAccordionItems[index].isOpen;
    setAccordionItems(updatedAccordionItems);
  };
  return (
    <>
      <motion.section
        className="pt-12"
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.5 }}>
        <div className="container">
          <div className="">
            <Accordion
              title={"Rahbariyat"}
              isOpen={accordionItems[2].isOpen}
              toggleAccordion={() => toggleAccordionItem(2)}>
              <div className="container flex justify-around gap-5 pt-3 pb-5">
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-2 text-black">
                    <FaUserTie />
                    Direktor:
                  </div>

                  <p> Tajibayev Nodirbek Abduvohidovich</p>
                  <div className="flex items-center gap-2 text-black">
                    <FaRegClock />
                    Qabul vaqti:
                  </div>
                  <p> Seshanba-Juma 15:00 - 17:00</p>
                  <div className="flex items-center gap-2 text-black">
                    <FaPhone />
                    Telefon raqam:
                  </div>

                  <a
                    className="hover:text-primary"
                    href="tel:+998 90 274 50 20">
                    +998 90 274 50 20
                  </a>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-2 text-black">
                    <FaUsertie />
                    Bosh muhandis:
                  </div>
                  <p>Abdurahimov Shuxratjon</p>
                  <div className="flex items-center gap-2 text-black">
                    <FaRegClock />
                    Qabul vaqti:
                  </div>
                  <p>Dushanba-Juma 8:00 - 11:00</p>
                  <div className="flex items-center gap-2 text-black">
                    <FaPhone />
                    Telefon raqam:
                  </div>
                  <a
                    className="hover:text-primary"
                    href="tel:+998 91 655 23 00">
                    +998 91 655 23 00
                  </a>
                </div>
              </div>
            </Accordion>
            <Accordion
              title={"Hujjatlar"}
              isOpen={accordionItems[0].isOpen}
              toggleAccordion={() => toggleAccordionItem(0)}>
              {laws ? (
                <div className="px-10 pb-5">
                  <div className="flex flex-col gap-3">
                    {laws.map(({ id, fileUrl, text, title }) => (
                      <a
                        key={id}
                        target="_blank"
                        className="flex gap-3 items-center"
                        href={fileUrl}
                        download>
                        <svg
                          width="24"
                          height="24"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="red">
                          <path d="M18 0H6C4.346 0 3 1.346 3 3v18c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3V6c0-1.654-1.346-3-3-3zm1 21c0 .551-.449 1-1 1H6c-.551 0-1-.449-1-1V3c0-.551.449-1 1-1h12c.551 0 1 .449 1 1v18z" />
                          <path d="M14 5h-4V4h4v1zm0 2h-4V6h4v1zm0 2h-4V8h4v1zm0 2h-4v-1h4v1zM7 7H3v14h1v1h14v-1h1V9h-1V4H7zm4 4H8v1h3v-1zm0 2H8v1h3v-1zm0 2H8v1h3v-1zm0 2H8v1h3v-1zm0 2H8v1h3v-1zm5-8h-1V4h1v2z" />
                        </svg>
                        <p className="hover:text-primary">{title}</p>
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <img src="/loader200.gif" alt="loader" />
                </div>
              )}
            </Accordion>
          </div>
        </div>
      </motion.section>
    </>
  );
}
