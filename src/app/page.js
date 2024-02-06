import Header from "@/components/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About";
import Products from "@/components/Products/Products";
import Footer from "@/components/Footer";
import Contacts from "@/components/Contacts";
import Production from "@/components/Production/Production";
import Content from "@/components/Content/Content";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Content />
        {/* <Products />
        <About />
        <Production /> */}
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
