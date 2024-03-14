"use client";
import Card from "@/components/Card";
import GridContainer from "@/components/layouts/GridContainer";
import SkeletonCard from "@/components/loading/SkeletonCard";
import { TourGuide } from "@/models/interface/TourGuide";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "next/navigation";

export default function Guide() {
  const { data, isLoading } = useQuery<TourGuide[]>({
    queryFn: async () => {
      const response = await axios.get(
        `/api/${params.city}/${params.destination}`
      );
      return response.data.data;
    },
    queryKey: ["guide"],
  });
  const params = useParams<{ city: string; destination: string }>();
  return (
    <main className="radialGradient flex flex-col gap-16">
      <h1 className="text-xl bold md:text-[36px] text-white py-3 px-2 bg-purple self-start">Booking Tour Guide</h1>
      {isLoading ? (
        <GridContainer className="radialGradient">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </GridContainer>
      ) : (
        <GridContainer className="radialGradient">
          {data?.map((guideItem: TourGuide) => {
            return (
              <Card
                image={guideItem.image}
                name={guideItem.name}
                linkTo={guideItem.id}
                key={guideItem.id}
              />
            );
          })}
        </GridContainer>
      )}
    </main>
  );
}
