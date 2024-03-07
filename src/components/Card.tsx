import Image from "next/image";
import React from "react";

const Card = ({ name, image }: { name: string; image: string }) => {
  return (
    <div className="bg-transparent relative flex flex-col items-center cursor-pointer rounded-t-md">
      <Image
        src={image}
        alt="city"
        width={325}
        height={325}
        className="rounded-t-xl"
      />
      <div className="bg-white w-32 h-10 md:w-[200px] md:h-[60px] flex justify-center items-center absolute -bottom-6">
        <h4 className="bold">{name}</h4>
      </div>
    </div>
  );
};

export default Card;
