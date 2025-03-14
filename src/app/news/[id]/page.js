import React from "react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import Carousel from "../../../components/News/slider";

export default async function NewsItem({ params }) {
  const docRef = doc(db, "news", params.id);
  const docSnap = await getDoc(docRef);

  console.log(docSnap.data());
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    const { images, title, text, date } = docSnap.data();
    return (
      <div className="container">
        <div className="w-full">
          <Carousel images={images} />
          <p className="px-2 py-1 bg-[#dfdfdf] rounded-sm inline-block">
            {date}
          </p>
          <h3 className="my-4 text-lg md:text-xl">{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    );
  } else {
    return <div className="container">Ma'lumot topilmadi!</div>;
  }
}

export async function generateStaticParams() {
  const queryNews = await getDocs(collection(db, "news"));
  const newsData = queryNews.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return newsData.map((news) => ({
    id: news.id,
  }));
}
