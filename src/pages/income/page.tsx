import UserPageLayout from "../../components/userPageLayout";
import GridCard from "../../components/grid-card";
import IncomeAndExpenseItem from "../../components/IncomeAndExpenseItem";
import TitleWithPathArray from "../../components/TitleWithPathArray";

const Page = () => {
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const randomData = months.map((month, index) => ({
    month,
    items: Array.from({ length: Math.floor(Math.random() * 5) + 1 }).map(
      () => ({
        title: `Pemasukan ${Math.random() > 0.5 ? "A" : "B"}`,
        date: new Date(2025, index, Math.floor(Math.random() * 28) + 1),
        amount: Math.floor(Math.random() * 1000000) + 50000,
      })
    ),
  }));

  return (
    <>
      <UserPageLayout>
        <TitleWithPathArray
          currentPath={"Pemasukan"}
          previousPaths={["Dashboard", "Wallet"]}
        />

        <div className="flex flex-col gap-5">
          {randomData.map(({ month, items }) => (
            <GridCard key={month}>
              <h2 className="font-bold text-2xl md:text-3xl mb-4">{month}</h2>
              <hr className="border-b-0 rounded-xl border-[#1B1B1B]" />

              {items.map((item, index) => (
                <IncomeAndExpenseItem
                  key={index}
                  title={item.title}
                  date={item.date}
                  amount={item.amount}
                />
              ))}
            </GridCard>
          ))}
        </div>
      </UserPageLayout>
    </>
  );
};

export default Page;
