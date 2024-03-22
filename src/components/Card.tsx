import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({
  name,
  image,
  linkTo,
}: {
  name: string;
  image: string;
  linkTo?: string;
}) => {
  return (
    <Link
      className="bg-transparent relative flex flex-col items-center cursor-pointer rounded-t-md"
      href={linkTo ?? ""}
    >
      <Image
        src={image}
        alt="city"
        width={325}
        height={325}
        className="rounded-t-xl w-full h-full"
      />
      <div className="bg-white w-32 h-10 xl:w-[200px] xl:h-[60px] flex justify-center items-center absolute -bottom-6">
        <h4 className="bold">{name}</h4>
      </div>
    </Link>
  );
};

export default Card;
