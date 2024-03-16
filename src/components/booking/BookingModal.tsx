import { useRef } from "react";
import { useOnClickOutside } from "@/hooks/UseOnClickOutside";
import BookingModalCard from "./BookingModalCard";

const Modal = ({
  onClose,
  linkTo,
  bookingGuide,
  onClick,
}: {
  onClose?: () => void;
  linkTo?: string;
  bookingGuide: string;
  onClick?: () => void;
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(modalRef, onClose);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center px-6 md:px-32">
      <BookingModalCard
        ref={modalRef}
        linkTo={linkTo}
        bookingLink={bookingGuide}
        onClick={onClick}
      />
    </div>
  );
};

export default Modal;
