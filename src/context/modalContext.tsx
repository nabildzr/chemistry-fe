import React, { createContext,  useContext,  useState } from "react";

type ModalContextType = {
  isDepositModalOpen: boolean;
  isWithdrawModalOpen: boolean;
  openDepositModal: () => void;
  closeDepositModal: () => void;
  openWithdrawModal: () => void;
  closeWithdrawModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDepositModalOpen, setDepositModalOpen] = useState(false);
  const [isWithdrawModalOpen, setWithdrawModalOpen] = useState(false);

  const openDepositModal = () => setDepositModalOpen(true);
  const closeDepositModal = () => setDepositModalOpen(false);
  const openWithdrawModal = () => setWithdrawModalOpen(true);
  const closeWithdrawModal = () => setWithdrawModalOpen(false);

  return (
    <ModalContext.Provider
      value={{
        isDepositModalOpen,
        isWithdrawModalOpen,
        openDepositModal,
        closeDepositModal,
        openWithdrawModal,
        closeWithdrawModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};