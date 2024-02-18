"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import img from "../../public/image.avif";
// const IMAGES = [
//   require("../../../public/image.jpeg").default,
//   // require("../../../public/image-1.avif").default,
//   // require("../../../public/image-2.avif").default,
//   // require("../../../public/image-3.avif").default,
// ];
function Carousel() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    lazyload: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: false,
    prevArrow: false,
  };

  return (
    <Slider {...settings} className="w-full">
      {IMAGES.map((img, ind) => {
        return (
          <div key={ind}>
            <img
              className="w-full object-left brightness-75"
              src={img.src}
              alt=""
            />
          </div>
        );
      })}
    </Slider>
  );
}

export default Carousel;
