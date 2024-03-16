import Ticket from "@/components/Ticket";
import OrderStageComponent from "@/components/booking/OrderStageComponent";

export default function TicketPage() {
  return (
    <main className="flex flex-col gap-10 md:gap-20">
      <OrderStageComponent activeStage={"ticket"} />
      <Ticket
        title="Tiket Anda"
        destination="Candi Borobudur"
        date="2024-07-15"
        tourGuide="1"
      />
    </main>
  );
}
