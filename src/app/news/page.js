import Carousel from "@/components/News/slider";
import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { db } from "../firebase";
import Link from "next/link";

async function getNews() {
  const queryNews = await getDocs(collection(db, "news"));
  const newsData = queryNews.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  // console.log(newsData);

  return newsData;
}

export default async function News() {
  const news = await getNews();
  console.log(news && news);
  return (
    <section className="py-10">
      <div className="container">
        <h2 className="text-center text-2xl text-secondary mb-7">
          Barcha Yangiliklar
        </h2>
        {news ? (
          <div className="flex gap-10 justify-center">
            {news.map(({ id, images, date, title }) => {
              return (
                <Link href={`/news/${id}`} className="max-w-[360px] " key={id}>
                  <Carousel images={images} />
                  <p className="px-2 py-1 bg-[#dfdfdf] rounded-sm inline-block">
                    {date}
                  </p>
                  <h3 className="mt-4 text-lg md:text-xl">{title}</h3>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <img src="/loader200.gif" alt="loader" />
          </div>
        )}
      </div>
    </section>
  );
}
