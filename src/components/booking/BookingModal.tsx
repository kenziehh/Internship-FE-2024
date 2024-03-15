import { useRef } from "react";
import { useOnClickOutside } from "@/hooks/UseOnClickOutside";
import BookingModalCard from "./BookingModalCard";

const Modal = ({
  onClose,
  linkTo,
  bookingGuide,
}: {
  onClose?: () => void;
  linkTo?: string;
  bookingGuide: string;
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(modalRef, onClose);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center px-6 md:px-32">
      <BookingModalCard
        ref={modalRef}
        linkTo={linkTo}
        bookingLink={bookingGuide}
      />
    </div>
  );
};

export default Modal;
