"use client";
import DestinationCard from "@/components/DestinationCard";
import { Destination } from "@/models/interface/Destination";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "next/navigation";
import React from "react";

const CityItemList = () => {
  const { data } = useQuery<Destination[]>({
    queryFn: async () => {
      const response = await axios.get(`/api/${params.city}`);
      return response.data.data;
    },
    queryKey: ["cityItem"],
  });
  const params = useParams<{ city: string }>();
  console.log(params.city);

  return (
    <section className="flex flex-col gap-10 radialGradient mt-10">
      {data?.map((destinationItem: Destination) => {
        return (
          <DestinationCard
            key={destinationItem?.id}
            name={destinationItem?.name}
            desc={destinationItem?.desc}
            image={destinationItem?.image}
            linkTo={`/${params.city}/${destinationItem?.id}`}
          />
        );
      })}
    </section>
  );
};

export default CityItemList;
