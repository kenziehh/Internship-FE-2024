"use client";
import BookingModalCard from "@/components/booking/BookingModalCard";
import OrderStageComponent from "@/components/booking/OrderStageComponent";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function CheckoutWithGuide() {
  const params = useParams<{
    city: string;
    destinationId: string;
    guideId: string;
  }>();
  const router = useRouter();
  const onClick = () => {
    router.push(
      "/ticket/ticketId"
    );
  };
  return (
    <main className="radialGradient flex-col flex gap-6 md:gap-14">
      <OrderStageComponent activeStage={"pay"} />
      <BookingModalCard
        isGuided
        linkTo={`/${params.city}/${params.destinationId}/guide/${params.guideId}`}
        onClick={onClick}
      />
    </main>
  );
}
