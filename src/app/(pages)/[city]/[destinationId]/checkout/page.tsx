"use client";
import BookingModalCard from "@/components/booking/BookingModalCard";
import OrderStageComponent from "@/components/booking/OrderStageComponent";
import { OrderStage } from "@/models/types/OrderStage";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CheckOut() {
  const [activeStage, setActiveStage] = useState<OrderStage>("order");

  const router = useRouter();
  const params = useParams<{ city: string; destinationId: string }>();
  const onClick = () => {
    if (activeStage !== "pay") {
      router.push("/ticket/id");
    } else {
      router.push("/ticket/id");
    }
  };
  useEffect(() => {}, [activeStage]);

  return (
    <main className="flex flex-col gap-10">
      {activeStage === "order" ? (
        <OrderStageComponent activeStage={activeStage} />
      ) : (
        <OrderStageComponent activeStage={"pay"} />
      )}
      <BookingModalCard
        title={"Pesan Tiket"}
        bookingLink={`/${params.city}/${params.destinationId}/guide`}
        onClick={onClick}
      />
    </main>
  );
}
