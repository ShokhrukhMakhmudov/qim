import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { FiDownload } from "react-icons/fi";
import { db } from "../firebase";

async function getDocuments() {
  const queryLaws = await getDocs(collection(db, "laws"));

  const lawsData = queryLaws.docs.map((doc) => doc.data());
  // console.log(newsData);

  return lawsData;
}

export default async function Documents() {
  const laws = await getDocuments();

  return (
    <section>
      <div className="container">
        <h2 className="text-center text-2xl text-secondary mb-7">
          Barcha Hujjatlar
        </h2>
        <div className="flex flex-col gap-x-5 gap-y-10 justify-center">
          {laws ? (
            laws.map(({ fileUrl, title, id, time }, ind) => (
              <div
                className="flex gap-5 items-center justify-between border-b-2 pb-6"
                key={ind}>
                <div className="flex gap-5 items-center">
                  <svg
                    className="scale-[2.5]"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="red">
                    <path d="M18 0H6C4.346 0 3 1.346 3 3v18c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3V6c0-1.654-1.346-3-3-3zm1 21c0 .551-.449 1-1 1H6c-.551 0-1-.449-1-1V3c0-.551.449-1 1-1h12c.551 0 1 .449 1 1v18z" />
                    <path d="M14 5h-4V4h4v1zm0 2h-4V6h4v1zm0 2h-4V8h4v1zm0 2h-4v-1h4v1zM7 7H3v14h1v1h14v-1h1V9h-1V4H7zm4 4H8v1h3v-1zm0 2H8v1h3v-1zm0 2H8v1h3v-1zm0 2H8v1h3v-1zm0 2H8v1h3v-1zm5-8h-1V4h1v2z" />
                  </svg>
                  <p className="">{title}</p>
                </div>
                <a
                  className="flex items-start gap-3"
                  href={fileUrl}
                  download
                  target="_blank">
                  <p>Yuklash</p>
                  <FiDownload className="scale-150" />
                </a>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center">
              <img src="/loader200.gif" alt="loader" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
