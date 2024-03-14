"use client";
import BookingModalCard from "@/components/booking/BookingModalCard";
import { OrderStage } from "@/models/types/OrderStage";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function CheckOut() {
  const [stage, setStage] = useState<OrderStage>("order");
  const getTitle = () => {
    if (stage === "order") {
      return "Pesan";
    } else if (stage === "pay") {
      return "Bayar";
    } else {
      return "Tiket Anda";
    }
  };
  const params = useParams<{city:string,destinationId:string}>();

  return (
    <main className="flex">
      <BookingModalCard title={getTitle()} bookingLink={`/${params.city}/${params.destinationId}/guide`} />
    </main>
  );
}
