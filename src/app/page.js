"use client";
import Hero from "@/components/Hero/Hero";
import News from "../components/News";
import Contacts from "@/components/Contacts";
import Content from "@/components/Content/Content";
import About from "@/components/About";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { putData } from "@/redux/features/data.slice";
import { useDispatch } from "react-redux";

async function getData() {
  const dispatch = useDispatch();
  // News
  const queryNews = await getDocs(collection(db, "news"));
  const newsData = queryNews.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  dispatch(putData({ news: newsData }));
  // Laws
  const queryLaws = await getDocs(collection(db, "laws"));

  const lawsData = queryLaws.docs.map((doc) => doc.data());

  dispatch(putData({ laws: lawsData }));
  // About
  const queryAbout = await getDocs(collection(db, "about"));

  const aboutData = queryAbout.docs.map((doc) => doc.data());

  dispatch(putData({ about: aboutData }));

  return;
}

export default async function Home() {
  getData();

  return (
    <>
      <Hero />
      <About />
      <Content />
      <News />
      <Contacts />
    </>
  );
}
