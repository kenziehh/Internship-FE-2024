import Image from "next/image";
import React from "react";
import ArrowButton from "../ArrowButton";

const CarouselImage = ({ image }: { image: string }) => {
  return (
    <div className="relative">
      <Image
        src={image}
        alt=""
        width={1000}
        height={350}
        className="rounded-2xl w-full"
      />
      <div className="md:flex flex-col absolute bottom-2 left-2 md:bottom-10 md:left-10">
        <h1 className="bold text-white text-lg md:h1">Yogyakarta</h1>
        <h3 className="text-sm md:text-2xl font-light text-slate-100">
          Jawa Tengah, Indonesia
        </h3>
      </div>
      <div className="flex gap-5 absolute bottom-2 right-2 md:bottom-10 md:right-10">
        <ArrowButton direction="left" />
        <ArrowButton direction="right" />
      </div>
    </div>
  );
};

export default CarouselImage;
