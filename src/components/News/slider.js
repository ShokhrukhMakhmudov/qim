"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        right: 0,
        zIndex: 10,
        zoom: 1.7,
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        left: 0,
        zIndex: 10,
        zoom: 1.7,
      }}
      onClick={onClick}
    />
  );
}

function Carousel({ images }) {
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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings} className="relative">
      {images ? (
        images.map((img, ind) => {
          return (
            <div key={ind}>
              <img
                className="object-center object-cover brightness-75 w-full max-h-[270px]" /*max-h-[562.5px] */
                src={img}
                alt="news image"
              />
            </div>
          );
        })
      ) : (
        <div>
          <img
            className="object-center object-cover brightness-75 w-full max-h-[270px]" /*max-h-[562.5px] */
            src={"/logo.png"}
            alt="news image"
          />
        </div>
      )}
    </Slider>
  );
}

export default Carousel;
