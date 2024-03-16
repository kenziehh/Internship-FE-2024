"use client";
import BookingModalCard from "@/components/booking/BookingModalCard";
import { OrderStage } from "@/models/types/OrderStage";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function CheckOut() {

  const params = useParams<{city:string,destinationId:string}>();

  return (
    <main className="flex">
      <BookingModalCard title={"Pesan Tiket"} bookingLink={`/${params.city}/${params.destinationId}/guide`} />
    </main>
  );
}
