import { useState } from "react";

const Page = () => {
  const [isDepositModalOpen, setDepositModalOpen] = useState(false);
  const [isWithdrawModalOpen, setWithdrawModalOpen] = useState(false);
  const closeModal = () => {
    setDepositModalOpen(false);
    setWithdrawModalOpen(false);
  };
  return (
    <div>
     
    </div>
  );
};

export default Page;
