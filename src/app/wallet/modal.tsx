"use client";

import React, { useState } from "react";
import InWalletModalProps from "@/types/inWalletModal";
import Modal from "@/components/Modal";
import Lottie from "lottie-react";
import successAnimation from "../../../public/animations/successV2.json";

const InWalletModal = ({
  isDepositModalOpen,
  isWithdrawModalOpen,
  closeModal,
}: InWalletModalProps) => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [transactionType, setTransactionType] = useState("");

  const handleSubmit = (e: React.FormEvent, type: string) => {
    e.preventDefault();
    setTransactionType(type);
    setIsSuccessModalOpen(true);
  };

  const handleCloseSuccess = () => {
    setIsSuccessModalOpen(false);
    closeModal();
  };

  return (
    <div>
      {/* Deposit Modal */}
      <Modal isOpen={isDepositModalOpen} onClose={closeModal} title="Deposit">
        <form onSubmit={(e) => handleSubmit(e, "Deposit")}>
          <div className="">
            <p className="font-bold text-sm mt-2">Nominal</p>
            <input
              type="number"
              className="border text-[#525F7F] border-gray-300 rounded-lg p-2 w-full mt-2 bg-gray-100 focus:outline-none focus:ring-0"
              placeholder="Enter amount"
              autoFocus
            />
          </div>

          <div className="">
            <p className="font-bold text-sm mt-2">Catatan/Pesan</p>
            <input
              type="text"
              className="border text-[#525F7F] border-gray-300 rounded-lg p-2 w-full mt-2 bg-gray-100 focus:outline-none focus:ring-0"
              placeholder="Enter message"
            />
          </div>
          <button
            type="submit"
            className="bg-[#525F7F] text-white rounded-lg px-4 py-2 mt-4"
          >
            Selesai
          </button>
        </form>
      </Modal>

      {/* Withdraw Modal */}
      <Modal isOpen={isWithdrawModalOpen} onClose={closeModal} title="Withdraw">
        <form onSubmit={(e) => handleSubmit(e, "Withdraw")}>
          <div className="">
            <p className="font-bold text-sm mt-2">Nominal</p>
            <input
              type="number"
              className="border text-[#525F7F] border-gray-300 rounded-lg p-2 w-full mt-2 bg-gray-100 focus:outline-none focus:ring-0"
              placeholder="Enter amount"
              autoFocus
            />
          </div>

          <div className="">
            <p className="font-bold text-sm mt-2">Catatan/Pesan</p>
            <input
              type="text"
              className="border text-[#525F7F] border-gray-300 rounded-lg p-2 w-full mt-2 bg-gray-100 focus:outline-none focus:ring-0"
              placeholder="Enter message"
            />
          </div>
          <button
            type="submit"
            className="bg-[#525F7F] text-white rounded-lg px-4 py-2 mt-4"
          >
            Selesai
          </button>
        </form>
      </Modal>

      {/* Success Modal */}
      <Modal
        isOpen={isSuccessModalOpen}
        onClose={handleCloseSuccess}
      >
        <div className="flex flex-col items-center justify-center py-4">
          <div className="w-52 h-52">
            <Lottie
              animationData={successAnimation}
              loop={true}
              autoplay={true}
            />
          </div>
          <p className="text-center text-3xl font-bold mb-4 font-">
            {transactionType === "Deposit"
              ? "Deposit Berhasil"
              : "Penarikan Berhasil"}
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default InWalletModal;
