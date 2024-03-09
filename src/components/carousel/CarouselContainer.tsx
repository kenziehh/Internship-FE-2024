"use client";
import React, { useState } from "react";
import CarouselImage from "./CarouselImage";
import { CarouselImageData } from "@/models/interface/CarouselImageData";

const CarouselContainer = ({
  images,
  data,
}: {
  images: string[];
  data: CarouselImageData;
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <section>
      <CarouselImage
        name={data.name}
        image={images[currentIndex]}
        location={data.location}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </section>
  );
};

export default CarouselContainer;
