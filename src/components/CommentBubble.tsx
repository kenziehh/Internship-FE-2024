import Image from "next/image";
import React from "react";

const CommentBubble = () => {
  return (
    <div className="bg-white p-6 max-w-[440px] rounded-[20px] flex flex-col gap-6">
      <div className="flex items-start gap-5">
        <Image src={"/icons/profile.png"} alt="" width={60} height={60} />
        <div className="flex flex-col gap-2">
          <h5 className="text-xl bold">Aira Dermieza</h5>
          <div className="flex flex-col md:flex-row md:justify-between gap-2 md:gap-16">
            <div className="flex items-center">
              <Image src={"/icons/star.png"} width={20} height={20} alt="" />
              <Image src={"/icons/star.png"} width={20} height={20} alt="" />
              <Image src={"/icons/star.png"} width={20} height={20} alt="" />
              <Image src={"/icons/star.png"} width={20} height={20} alt="" />
              <Image src={"/icons/star.png"} width={20} height={20} alt="" />
            </div>
            <p className="text-base text-neutral">06 Maret 2024</p>
          </div>
        </div>
      </div>
      <p className="text-neutral text-lg">
        Emang udah gak perlu diraguin lagi yaa pemandangannya, saran buat kalian
        coba dateng pas sunrise dehh, indah bgt!!
      </p>
    </div>
  );
};

export default CommentBubble;
