import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import heroImage from "../../public/image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container w-full mx-auto px-4">
        <div className="">
          <div className=" bg-background/10 backdrop-blur-sm rounded-2xl  border border-white/20 shadow-hero">
            <div className="hero lg:h-[680px] overflow-hidden relative">
              <img src={heroImage.src} alt="bg" />
              <div className="w-full h-full bg-[#000000c9] absolute top-0 flex flex-col items-center justify-center">
                <div className="w-[70%] mt-[-150px] mb-10">
                  <h1
                    className={`text-2xl text-[#6d73ec] text-center md:text-3xl inline-block p-3 mb-3`}>
                    "Issiq suv va issiqlik taʼminotidagi barqarorlik – aholining
                    hayotdan rozi boʼlishini taʼminlovchi muhim omil"
                  </h1>
                  <p className="text-[#ffffff] text-xl text-end italic capitalize">
                    Sh.M. Mirziyoyev
                  </p>
                </div>
                <p className="hero-desc text-[white] text-2xl md:text-7xl font-medium mb-5">
                  "Qirguli Issiqlik Manbai"
                </p>
                <p className="text-[#6d73ec] text-2xl md:text-4xl font-medium">
                  Mas'uliyati cheklangan jamiyat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-1 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
