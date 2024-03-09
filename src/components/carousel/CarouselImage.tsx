import Image from "next/image";
import React from "react";
import ArrowButton from "../ArrowButton";

const CarouselImage = ({
  image,
  name,
  location,
  handleNext,
  handlePrev,
}: {
  image: string;
  name: string;
  location: string;
  handleNext: () => void;
  handlePrev: () => void;
}) => {
  return (
    <div className="relative">
      <Image
        src={image}
        alt=""
        width={1000}
        height={350}
        className="rounded-2xl w-full h-[20vh] md:h-full"
      />
      <div className="md:flex flex-col gap-1 absolute bottom-2 left-2 md:bottom-10 md:left-10">
        <h1 className="bold text-white text-lg md:h1">{name}</h1>
        <h3 className="text-sm md:text-2xl font-light text-slate-100">
          {location}
        </h3>
      </div>
      <div className="hidden md:flex gap-5 absolute bottom-2 right-2 md:bottom-10 md:right-10">
        <ArrowButton direction="left" onClick={handleNext} />
        <ArrowButton direction="right" onClick={handlePrev} />
      </div>
    </div>
  );
};

export default CarouselImage;
