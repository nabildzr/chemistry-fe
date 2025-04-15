import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ModalProps from "../types/modal";

const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
  // Variants untuk animasi modal
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 }, // Keadaan awal (sembunyi)
    visible: { opacity: 1, scale: 1 },  // Keadaan akhir (terlihat)
    exit: { opacity: 0, scale: 0.95 }, // Keadaan keluar (sembunyi)
  };

  const overlayVariants = {
    hidden: { opacity: 0 }, // Keadaan awal (sembunyi)
    visible: { opacity: 1 }, // Keadaan akhir (terlihat)
    exit: { opacity: 0 },    // Keadaan keluar (sembunyi)
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-91 flex items-center justify-center bg-[#0000007c] "
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.3 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose(); // Tutup modal jika klik di luar konten
          }}
        >
          <motion.div
            className="bg-white mx-6 rounded-xl shadow-lg p-6 w-full max-w-md relative"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center">
              {title && <h2 className="text-3xl font-bold">{title}</h2>}
              <button
                onClick={onClose}
                className="cursor-pointer text-gray-500 hover:text-gray-800"
              >
                <X />
              </button>
            </div>

            {title && <hr className="border-t border-gray-300 mt-4" />}
            <div className="flex flex-col">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;