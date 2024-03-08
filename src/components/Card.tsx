import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ name, image }: { name: string; image: string }) => {
  return (
    <Link
      className="bg-transparent relative flex flex-col items-center cursor-pointer rounded-t-md"
      href={"/city"}
    >
      <Image
        src={image}
        alt="city"
        width={325}
        height={325}
        className="rounded-t-xl w-72 h-72 md:w-full md:h-full"
      />
      <div className="bg-white w-32 h-10 md:w-[200px] md:h-[60px] flex justify-center items-center absolute -bottom-6">
        <h4 className="bold">{name}</h4>
      </div>
    </Link>
  );
};

export default Card;
