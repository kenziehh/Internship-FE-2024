"use client";
import { OrderStage } from "@/models/types/OrderStage";
import React, { useState } from "react";
import Stage from "./Stage";
import Image from "next/image";

const OrderStageComponent = ({ activeStage }: { activeStage: OrderStage }) => {
  const [isActive, setIsActive] = useState<OrderStage>(activeStage);
  if (isActive === "order") {
    return (
      <div className="flex flex-col lg:flex-row gap-6 md:justify-between items-center">
        <div className="flex md:gap-10 items-center">
          <Stage number={1} stage="Pesan" isActive={true} />
          <Image alt=" " src={"/arrow 2.png"} width={100} height={2} />
        </div>
        <div className="flex md:gap-10 items-center">
          <Stage number={2} stage="Bayar" isActive={false} />
          <Image alt=" " src={"/arrow 2.png"} width={100} height={2} />
        </div>
        <Stage number={3} stage="Tiket" isActive={false} />
      </div>
    );
  } else if (isActive === "pay") {
    return (
      <div className="flex flex-col lg:flex-row gap-6 md:justify-between items-center">
        <div className="flex md:gap-10 items-center">
          <Stage number={1} stage="Pesan" isActive={false} />
          <Image alt=" " src={"/arrow 2.png"} width={100} height={2} />
        </div>
        <div className="flex md:gap-10 items-center">
          <Stage number={2} stage="Bayar" isActive={true} />
          <Image alt=" " src={"/arrow 2.png"} width={100} height={2} />
        </div>
        <Stage number={3} stage="Tiket" isActive={false} />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col lg:flex-row gap-6 md:justify-between items-center">
        <div className="flex md:gap-10 items-center">
          <Stage number={1} stage="Pesan" isActive={false} />
          <Image alt=" " src={"/arrow 2.png"} width={100} height={2} />
        </div>
        <div className="flex md:gap-10 items-center">
          <Stage number={2} stage="Bayar" isActive={false} />
          <Image alt=" " src={"/arrow 2.png"} width={100} height={2} />
        </div>
        <Stage number={3} stage="Tiket" isActive={true} />
      </div>
    );
  }
};

export default OrderStageComponent;
