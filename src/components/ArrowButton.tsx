import { ArrowDirection } from "@/models/types/ArrowDirection";
import Image from "next/image";
import React from "react";

const ArrowButton = ({
  direction,
  onClick,
}: {
  direction: ArrowDirection;
  onClick?: () => void;
}) => {
  const directionString = () => {
    if (direction === "right") {
      return "/icons/arrow-next.png";
    } else if (direction === "left") {
      return "/icons/arrow-back.png";
    } else {
      return "";
    }
  };
  return (
    <button
      className="w-[25px] h-[25px] md:w-[45px] md:h-[45px] bg-neutral flex justify-center items-center rounded-full"
      onClick={onClick}
    >
      <Image src={directionString()} alt="" width={12} height={20} />
    </button>
  );
};

export default ArrowButton;
