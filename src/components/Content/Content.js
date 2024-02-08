"use client";
import React, { useState } from "react";
import Accordion from "./Accordion";
import file1 from "./pdfs/VI-63-2-11-0-K_24.pdf";
import file2 from "./pdfs/file-2.docx";
import file3 from "./pdfs/file-3.pdf";

export default function Content() {
  // const [activeElement, setActiveElement] = useState("");

  // const handleClick = (value) => {
  //   if (value === activeElement) {
  //     setActiveElement("");
  //   } else {
  //     setActiveElement(value);
  //   }
  // };
  const [accordionItems, setAccordionItems] = useState([
    {
      title: "Hujjatlar",
      content: (
        <div className="px-10 pb-5">
          <div className="flex flex-col gap-3">
            <a className="flex gap-3 items-center" href={file1} download>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill="red">
                <path d="M18 0H6C4.346 0 3 1.346 3 3v18c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3V6c0-1.654-1.346-3-3-3zm1 21c0 .551-.449 1-1 1H6c-.551 0-1-.449-1-1V3c0-.551.449-1 1-1h12c.551 0 1 .449 1 1v18z" />
                <path d="M14 5h-4V4h4v1zm0 2h-4V6h4v1zm0 2h-4V8h4v1zm0 2h-4v-1h4v1zM7 7H3v14h1v1h14v-1h1V9h-1V4H7zm4 4H8v1h3v-1zm0 2H8v1h3v-1zm0 2H8v1h3v-1zm0 2H8v1h3v-1zm0 2H8v1h3v-1zm5-8h-1V4h1v2z" />
              </svg>
              <p className="hover:text-primary">VI-63-2-11-0-K_24</p>
            </a>

            <a className="flex gap-3 items-center" href={file2} download>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill="red">
                <path d="M18 0H6C4.346 0 3 1.346 3 3v18c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3V6c0-1.654-1.346-3-3-3zm1 21c0 .551-.449 1-1 1H6c-.551 0-1-.449-1-1V3c0-.551.449-1 1-1h12c.551 0 1 .449 1 1v18z" />
                <path d="M14 5h-4V4h4v1zm0 2h-4V6h4v1zm0 2h-4V8h4v1zm0 2h-4v-1h4v1zM7 7H3v14h1v1h14v-1h1V9h-1V4H7zm4 4H8v1h3v-1zm0 2H8v1h3v-1zm0 2H8v1h3v-1zm0 2H8v1h3v-1zm0 2H8v1h3v-1zm5-8h-1V4h1v2z" />
              </svg>

              <p className="hover:text-primary">Ulgurji shartnoma 2024</p>
            </a>

            <a className="flex gap-3 items-center" href={file3} download>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill="red">
                <path d="M18 0H6C4.346 0 3 1.346 3 3v18c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3V6c0-1.654-1.346-3-3-3zm1 21c0 .551-.449 1-1 1H6c-.551 0-1-.449-1-1V3c0-.551.449-1 1-1h12c.551 0 1 .449 1 1v18z" />
                <path d="M14 5h-4V4h4v1zm0 2h-4V6h4v1zm0 2h-4V8h4v1zm0 2h-4v-1h4v1zM7 7H3v14h1v1h14v-1h1V9h-1V4H7zm4 4H8v1h3v-1zm0 2H8v1h3v-1zm0 2H8v1h3v-1zm0 2H8v1h3v-1zm0 2H8v1h3v-1zm5-8h-1V4h1v2z" />
              </svg>
              <p className="hover:text-primary">Shartnoma_06.02</p>
            </a>
          </div>
        </div>
      ),
      isOpen: false,
    },
    {
      title: "Tariflar",
      content: (
        <div className="px-10 py-4">
          <p className="hover:text-primary">Tarif-1</p>
          <p className="hover:text-primary">Tarif-2</p>
          <p className="hover:text-primary">Tarif-3</p>
        </div>
      ),
      isOpen: false,
    },
    {
      title: "Yangiliklar",
      isOpen: false,
    },
  ]);
  const toggleAccordionItem = (index) => {
    const updatedAccordionItems = [...accordionItems];
    updatedAccordionItems[index].isOpen = !updatedAccordionItems[index].isOpen;
    setAccordionItems(updatedAccordionItems);
  };
  return (
    <>
      <section className="py-12">
        <div className="container">
          <div className="">
            {accordionItems.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                content={item.content}
                isOpen={item.isOpen}
                toggleAccordion={() => toggleAccordionItem(index)}></Accordion>
            ))}

            {/* <div id="accordionExample">
              <div className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                <h2 className="mb-0" id="headingOne">
                  <button
                    className={`${
                      activeElement === "element1" &&
                      `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                    } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 text-3xl`}
                    type="button"
                    onClick={() => handleClick("element1")}
                    aria-expanded="true"
                    aria-controls="collapseOne">
                    Hujjatlar
                    <span
                      className={`${
                        activeElement === "element1"
                          ? `rotate-[-180deg] -mr-1`
                          : `rotate-0 fill-[#212529]  dark:fill-white`
                      } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </button>
                </h2>
                <TECollapse
                  show={activeElement === "element1"}
                  className="!mt-0 !rounded-b-none !shadow-none">
                  <div className="px-10 py-4">
                    <p className="hover:text-primary">Buyruqlar</p>
                    <p className="hover:text-primary">Hisobotlar</p>
                  </div>
                </TECollapse>
              </div>
            </div>

            <div className="border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
              <h2 className="mb-0" id="headingTwo">
                <button
                  className={`${
                    activeElement === "element2"
                      ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                      : `transition-none rounded-b-[15px]`
                  } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-3xl text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800`}
                  type="button"
                  onClick={() => handleClick("element2")}
                  aria-expanded="true"
                  aria-controls="collapseOne">
                  Tariflar
                  <span
                    className={`${
                      activeElement === "element2"
                        ? `rotate-[-180deg] -mr-1`
                        : `rotate-0 fill-[#212529] dark:fill-white`
                    } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </button>
              </h2>
              <TECollapse
                show={activeElement === "element2"}
                className="!mt-0 !rounded-b-none !shadow-none">
                <div className="px-5 py-4">
                  <p className="hover:text-primary">Tarif-1</p>
                  <p className="hover:text-primary">Tarif-2</p>
                  <p className="hover:text-primary">Tarif-3</p>
                </div>
              </TECollapse>
            </div>
            <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
              <h2 className="accordion-header mb-0" id="headingThree">
                <button
                  className={`${
                    activeElement === "element3"
                      ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                      : `transition-none rounded-b-[15px]`
                  } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-3xl text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800`}
                  type="button"
                  onClick={() => handleClick("element3")}
                  aria-expanded="true"
                  aria-controls="collapseOne">
                  Yangiliklar
                  <span
                    className={`${
                      activeElement === "element3"
                        ? `rotate-[-180deg] -mr-1`
                        : `rotate-0 fill-[#212529] dark:fill-white`
                    } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </button>
              </h2>
              <TECollapse
                show={activeElement === "element3"}
                className="!mt-0 !shadow-none">
                <div className="px-5 py-4"></div>
              </TECollapse>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
