import React from "react";

const Stage = ({
  number,
  stage,
  isActive,
}: {
  number: number;
  stage: string;
  isActive: boolean;
}) => {

  return (
    <div className="flex items-center gap-5 text-white">
      <span
        className={`${
          isActive ? "bg-purple text-black" : "bg-neutral text-black"
        } rounded-full w-10 h-10 h1 flex justify-center items-center `}
      >
        {number}
      </span>
      <h1
        className={`${isActive ? "text-purple" : "text-neutral"} text-lg md:h1`}
      >
        {stage}
      </h1>
    </div>
  );
};

export default Stage;
