import IncomeAndExpenseItemProps from "../types/incomeAndExpenseItem";

const IncomeAndExpenseItem = ({
  title,
  date,
  amount,
}: IncomeAndExpenseItemProps) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="font-bold text-1xl md:text-2xl">{title}</p>
        <p className="text-1xl md:text-xl">{date.toLocaleDateString()}</p>
      </div>
      <p className="text-1xl hidden md:block md:text-2xl">
        {new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(amount)}
      </p>
    </div>
  );
};

export default IncomeAndExpenseItem;
