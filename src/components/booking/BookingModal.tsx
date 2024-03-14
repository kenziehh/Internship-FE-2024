import { useRef } from "react";
import { useOnClickOutside } from "@/hooks/UseOnClickOutside";
import BookingModalCard from "./BookingModalCard";

interface ModalProps {
  onClose?: () => void;
  linkTo?: string;
}

const Modal: React.FC<ModalProps> = ({ onClose, linkTo }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(modalRef, onClose);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center px-32">
      <BookingModalCard ref={modalRef} linkTo={linkTo} />
    </div>
  );
};

export default Modal;
