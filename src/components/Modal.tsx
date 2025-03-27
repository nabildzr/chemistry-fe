import ModalProps from "@/types/modal";
import { X } from "lucide-react";
import React, { useEffect, useState } from "react";

const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timeout = setTimeout(() => setIsVisible(false), 300); // Durasi animasi out
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0  z-91 flex items-center justify-center bg-[#0000007c] transition-opacity duration-300 ease-in-out ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleOverlayClick}
    >
      <div
        className={`bg-white mx-6 rounded-xl shadow-lg p-6 w-full max-w-md relative transform transition-transform duration-300 ${
          isOpen ? "scale-100" : "scale-95"
        }`}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-3xl  font-bold ">{title}</h2>
          <button
            onClick={onClose}
            className="cursor-pointer text-gray-500 hover:text-gray-800"
          >
            <X />
          </button>
        </div>

        <hr className="border-t border-gray-300 my-3" />
        <div className="flex flex-col ">
        {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
