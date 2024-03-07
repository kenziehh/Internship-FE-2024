import Image from "next/image";
import React from "react";
import ArrowButton from "../ArrowButton";

const CarouselImage = ({ image }: { image: string }) => {
  return (
    <div className="relative">
      <Image
        src={"/carousel-yogya.jpg"}
        alt=""
        width={1000}
        height={350}
        className="rounded-2xl w-full"
      />
      <div className="hidden md:flex flex-col absolute bottom-10 left-10">
        <h1 className="bold text-white">Yogyakarta</h1>
        <h3 className="text-2xl font-light text-slate-100">
          Jawa Tengah, Indonesia
        </h3>
      </div>
      <div className="hidden md:flex gap-5 absolute bottom-10 right-10">
        <ArrowButton direction="left" />
        <ArrowButton direction="right" />
      </div>
    </div>
  );
};

export default CarouselImage;
