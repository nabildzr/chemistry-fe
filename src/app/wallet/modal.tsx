import React from "react";
import InWalletModalProps from "@/types/inWalletModal";
import Modal from "@/components/Modal";

const InWalletModal = ({
  isDepositModalOpen,
  isWithdrawModalOpen,
  closeModal,
}: InWalletModalProps) => {
  return (
    <div>
      {/* Deposit Modal */}
      <Modal isOpen={isDepositModalOpen} onClose={closeModal} title="Deposit">
        <form action="">
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
          <button className="bg-[#525F7F] text-white rounded-lg px-4 py-2 mt-4">
            Selesai
          </button>
        </form>
      </Modal>

      {/* Withdraw Modal */}
      <Modal isOpen={isWithdrawModalOpen} onClose={closeModal} title="Withdraw">
        <form action="">
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
          <button className="bg-[#525F7F] text-white rounded-lg px-4 py-2 mt-4">
            Selesai
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default InWalletModal;
