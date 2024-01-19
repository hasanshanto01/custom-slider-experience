import React, { useEffect, useRef, useState } from "react";
import "./BasicSlider.css";
import { FaArrowLeftLong, FaArrowRightLong } from "../../utlis/Icons";

const BasicSlider = () => {
  const images = [
    {
      id: 1,
      imgUrl: "https://picsum.photos/id/233/1000/500",
    },
    {
      id: 2,
      imgUrl: "https://picsum.photos/id/234/1000/500",
    },
    {
      id: 3,
      imgUrl: "https://picsum.photos/id/235/1000/500",
    },
    {
      id: 4,
      imgUrl: "https://picsum.photos/id/236/1000/500",
    },
    {
      id: 5,
      imgUrl: "https://picsum.photos/id/237/1000/500",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = useRef();

  const goToPrev = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };

  const goToNext = () => {
    console.log("next");
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  //   useEffect(() => {
  //     // console.log("Current Slide Image:", images[currentSlide].imgUrl);

  //     const interval = setInterval(() => {
  //       setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  //     }, 3000); // Adjust the interval duration (in milliseconds) as needed

  //     return () => clearInterval(interval); // Cleanup on component unmount
  //   }, [currentSlide]);

  return (
    <div className="px-5 md:px-14 py-5">
      <h2 className="text-2xl font-bold text-center">Basic Slider</h2>
      {/* slider */}
      <div className="my-8">
        <div className="slide-contaier w-1/2 mx-auto shadow-lg h-[360px]">
          <img
            src={images[currentSlide].imgUrl}
            alt="slide image"
            className="slide w-full h-full"
            ref={slides}
          />
        </div>
        <div className="w-1/2 mx-auto flex justify-center gap-5 mt-5">
          <button className="btn btn-sm">
            <FaArrowLeftLong className="text-[24px]" onClick={goToPrev} />
          </button>
          <button className="btn btn-sm">
            <FaArrowRightLong className="text-[24px]" onClick={goToNext} />
          </button>
        </div>
        <div className="w-1/2 mx-auto flex justify-center gap-5 mt-5">
          {images?.map((img, index) => (
            <div
              className={`${
                index === currentSlide ? "bg-green-500" : "bg-base-300"
              } h-[10px] w-[10px] rounded-full hover:cursor-pointer`}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
      </div>
      {/* slider */}
    </div>
  );
};

export default BasicSlider;
