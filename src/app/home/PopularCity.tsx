"use client";
import Card from "@/components/Card";
import GridContainer from "@/components/layouts/GridContainer";
import SkeletonCard from "@/components/loading/SkeletonCard";
import { City } from "@/models/interface/City";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const PopularCity = () => {
  const { data, isLoading } = useQuery<City[]>({
    queryFn: async () => {
      const response = await axios.get("/api/city");
      return response.data.data;
    },
    queryKey: ["city"],
  });
  console.log(data);
  return (
    <section className="flex flex-col gap-12 pb-20">
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-3xl text-white bold">Populer</h3>
        <p className="text-2xl text-neutral text-center">
          Yuk mulai jelajahi kota tujuanmu!
        </p>
      </div>
      {isLoading ? (
        // <div className="text-white text-6xl">Loading</div>
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
          {data?.map((cityItem: City) => {
            return (
              <Card
                image={cityItem.image}
                name={cityItem.name}
                key={cityItem.id}
              />
            );
          })}
        </GridContainer>
      )}
    </section>
  );
};

export default PopularCity;
