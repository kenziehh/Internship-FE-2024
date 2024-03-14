import CarouselContainer from "@/components/carousel/CarouselContainer";
import { CarouselImageData } from "@/models/interface/CarouselImageData";
import CityItemList from "./CityItemList";

export default function City() {
  const data: CarouselImageData = {
    name: "Yogyakarta",
    location: "Jawa Tengah, Indonesia",
  };
  const imageArray = [
    "/images/carousel/carousel-borobudur.jpg",
    "/images/carousel/carousel-yogya.jpg",
  ];
  
  return (
    <main className="flex flex-col ">
      <CarouselContainer images={imageArray} data={data} />
      <CityItemList />
    </main>
  );
}
