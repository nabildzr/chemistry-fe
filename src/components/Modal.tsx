import ModalProps from "@/types/modal";
import { X } from "lucide-react";
import React, { useEffect, useState } from "react";

const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  // modal in and out animation
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timeout = setTimeout(() => setIsVisible(false), 300); // Durasi animasi out
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  // close modal when clicked over the content (modal)
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // esc close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0000007c] transition-opacity duration-300 ease-in-out ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
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

        <hr className="border-t border-gray-300 mt-4" />
        <div className="flex flex-col ">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
