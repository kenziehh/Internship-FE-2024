import Link from "next/link";
import Button from "./Button";
import { useRef } from "react";
import { useOnClickOutside } from "@/hooks/UseOnClickOutside";
import Input from "./Input";
import { Cross, CrossIcon } from "lucide-react";

interface ModalProps {
  onClose?: () => void;
  linkTo?: string;
}

const Modal: React.FC<ModalProps> = ({ onClose, linkTo }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  if (onClose) {
    useOnClickOutside(modalRef, onClose);
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center px-32 border-2 border-neutral">
      <div
        className="bg-black px-12 py-11 rounded-[30px] md:w-[1220px] flex flex-col items-stretch border-2 border-neutral"
        ref={modalRef}
      >
        <h2 className="text-white text-4xl bold">Beli Tiket</h2>
        <div className="flex flex-col items-center">
          <Input type="text" label="Destinasi" colors="dark" />
          <Input type="date" label="Tanggal" colors="dark" />
        </div>
        <div>
          <div className="text-purple flex justify-between items-center py-8">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full border-purple border-2"><CrossIcon size={20}/></div>
              <h3 className="text-white">Booking Tour Guide</h3>
            </div>
            <Link href={"/guide"} className="underline">
              Baca Selengkapnya
            </Link>
          </div>
        </div>
        <Button className="justify-center self-center">
          <Link href={"/transaction"}>Beli Tiket</Link>
        </Button>
      </div>
    </div>
  );
};

export default Modal;
