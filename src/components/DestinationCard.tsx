import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";

const DestinationCard = ({
  image,
  name,
  desc,
}: {
  image: string;
  name: string;
  desc: string;
}) => {
  return (
    <div className="py-9 px-7 bg-black flex flex-col gap-8 lg:flex-row md:gap-[44px] items-center">
      <Image width={315} height={315} src={image} alt="" />
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <h1 className="text-white bold">{name}</h1>
            <Image src={"/icons/hearth.png"} width={40} height={35} alt="" />
          </div>
          <p className="text-neutral text-sm md:text-2xl">{desc}</p>
        </div>
        <div className="flex flex-col gap-3 lg:flex-row lg:gap-0 justify-between mt-4">
          <div className="flex items-center">
            <Image src={"/icons/star.png"} width={30} height={30} alt="" />
            <Image src={"/icons/star.png"} width={30} height={30} alt="" />
            <Image src={"/icons/star.png"} width={30} height={30} alt="" />
            <Image src={"/icons/star.png"} width={30} height={30} alt="" />
            <Image src={"/icons/star.png"} width={30} height={30} alt="" />
          </div>
          <Button>
            <Link href={"/city/destination"}>Selengkapnya</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
