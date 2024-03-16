"use client";
import Separator from "@/components/Separator";
import Ticket from "@/components/Ticket";
import { TransactionSection } from "@/models/types/TransactionSection";
import { useState } from "react";

export default function Transaction() {
  const [selectedSection, setSelectedSection] =
    useState<TransactionSection>("booking");

  const selectSection = (section: TransactionSection) => {
    setSelectedSection(section);
  };

  return (
    <main>
      <section className="flex flex-col gap-6 md:gap-16">
        <div className="flex flex-col gap-6 items-start">
          <h1 className="text-[42px] text-white">Transaksi</h1>
          <Separator />
        </div>
        <div className="text-white grid grid-cols-2 text-center">
          <button
            className={`py-5 ${
              selectedSection === "booking"
                ? "border-b-2 border-purple text-purple"
                : ""
            }`}
            onClick={() => selectSection("booking")}
          >
            Dibooking
          </button>
          <button
            className={`py-5 ${
              selectedSection === "history"
                ? "border-b-2 border-purple text-purple"
                : ""
            }`}
            onClick={() => selectSection("history")}
          >
            Riwayat
          </button>
        </div>
      </section>
      <section className="py-8 md:py-16">
        {selectedSection === "booking" ? (
          <Ticket
            title="Tiket Anda"
            destination="Candi Borobudur"
            date="2024-07-15"
            tourGuide="1"
          />
        ) : (
          <div className="text-4xl text-center text-white flex justify-center items-center">
            Belum Ada Riwayat Pesanan
          </div>
        )}
      </section>
    </main>
  );
}
