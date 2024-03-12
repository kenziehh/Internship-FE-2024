"use client";
import Card from "@/components/Card";
import { City } from "@/models/interface/City";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const PopularCity = () => {
  const { data } = useQuery<City[]>({
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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 md:gap-40 justify-between radialGradient">
        {data?.map((cityItem: City) => {
          return (
            <Card
              image={cityItem.image}
              name={cityItem.name}
              key={cityItem.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default PopularCity;
