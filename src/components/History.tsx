import Image from "next/image";
import React from "react";
import Button from "./Button";

const History = ({
  image,
  name,
  location,
}: {
  image: string;
  name: string;
  location: string;
}) => {
  return (
    <div className="text-white border-2 rounded-xl p-5 border-neutral flex flex-col md:flex-row md:justify-between gap-4 md:gap-0">
      <div className="flex gap-6">
        <Image width={160} height={160} alt="" src={image} />
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="bold text-3xl">{name}</h1>
            <h2 className="">{location}</h2>
          </div>
          <div className="flex gap-2 items-center">
            <Image alt="" src={"/assets/empty-star.png"} width={30} height={30}/>
          </div>
        </div>
      </div>
      <Button className="self-start md:self-end">Beri Ulasam</Button>
    </div>
  );
};

export default History;
