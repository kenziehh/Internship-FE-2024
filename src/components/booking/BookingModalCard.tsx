import { Calendar, Check, CrossIcon } from "lucide-react";
import Link from "next/link";
import React, { forwardRef } from "react";
import Button from "../Button";

const BookingModalCard = forwardRef<
  HTMLDivElement,
  {
    title?: string;
    linkTo?: string;
    onClick?: () => void;
    bookingLink?: string;
    isGuided?: boolean;
  }
>(({ title, linkTo, onClick, bookingLink, isGuided = false }, ref) => {
  return (
    <div
      className="bg-black px-12 py-11 rounded-[30px] md:w-[1220px] xl:w-full flex flex-col items-stretch border-2 border-neutral w-full gap-6"
      ref={ref}
    >
      <h2 className="text-white text-4xl bold">{title ?? ""}</h2>
      <div className="flex flex-col items-center gap-6">
        <input
          type="text"
          value={"Candi Borobudur"}
          className={`block py-5 px-5 w-full rounded-[10px] text-lg text-white bg-darkest border-2 border-neutral`}
          disabled
        />
        <div className="flex items-center w-full border-2 border-neutral rounded-[10px] pl-4">
          <Calendar size={48} className="text-white" />
          <input
            type="date"
            className={`block py-5 px-5 w-full rounded-[10px] text-lg bg-darkest appearance-none focus:outline-none focus:ring-1 focus:border-blue-600 peer text-white`}
          />
        </div>
      </div>
      <div>
        <div className="text-purple flex justify-between items-center py-8 flex-col md:flex-row gap-4 md:gap-0">
          {isGuided ? (
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full border-purple border-2">
                <Check size={20} className="text-white" />
              </div>
              <h3 className="text-white">Booking Tour Guide</h3>
            </div>
          ) : (
            <Link className="flex items-center gap-2" href={bookingLink ?? ""}>
              <div className="p-2 rounded-full border-purple border-2">
                <CrossIcon size={20} />
              </div>
              <h3 className="text-white">Booking Tour Guide</h3>
            </Link>
          )}

          <Link href={linkTo ?? ""} className="underline">
            Baca Selengkapnya
          </Link>
        </div>
      </div>
      <Button className="justify-center self-center" onClick={onClick}>
        Beli Tiket
      </Button>
    </div>
  );
});
BookingModalCard.displayName = "BookingModalCard";

export default BookingModalCard;
