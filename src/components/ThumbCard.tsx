import Image from "next/image";
import React from "react";

const ThumbCard = ({
  direction,
  count,
  className,
}: {
  direction: string;
  count: number;
  className?: string;
}) => {
  const directionString = () => {
    if (direction === "up") {
      return "/icons/thumb-up.png";
    } else if (direction === "down") {
      return "/icons/thumb-down.png";
    } else {
      return "";
    }
  };
  return (
    <div
      className={`rounded-[20px] py-3 md:py-5 px-5 md:px-9 bg-white shadow-md flex flex-col items-center gap-4 ${className}`}
    >
      <Image src={directionString()} alt="" width={50} height={50} />
      <div className="flex items-center gap-1 text-neutral">
        <Image
          src={"/icons/profile-icon.png"}
          width={8}
          height={8}
          alt=""
          className="md:w-3 md:h-3"
        />
        <p>{count}</p>
      </div>
    </div>
  );
};

export default ThumbCard;
