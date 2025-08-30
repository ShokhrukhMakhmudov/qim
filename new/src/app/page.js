import AboutPreview from "@/components/AboutPreview";
import ContactPreview from "@/components/ContactPreview";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NewsSection from "@/components/NewsSection";
import ServicesPreview from "@/components/ServicesPreview";
import StatsSection from "@/components/StatsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutPreview />
      <StatsSection />
      <ServicesPreview />
      <NewsSection />
      <ContactPreview />
      <Footer />
    </div>
  );
}
