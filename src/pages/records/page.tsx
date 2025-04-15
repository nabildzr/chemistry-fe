import{ useState } from "react";
import GridCard from "../../components/grid-card";
import RecordItem from "../../components/RecordItem";
import UserPageLayout from "../../components/userPageLayout";
import TitleWithPathArray from "../../components/TitleWithPathArray";

const Page = () => {
  const [activeSide, setActiveSide] = useState<
    "sudahBayar" | "belumBayar" | null
  >("sudahBayar");

  return (
    <>
      <UserPageLayout>
        <TitleWithPathArray
          currentPath={"Records"}
          previousPaths={["Dashboard", "Wallet"]}
        />

        <div className="mt-5 grid md:grid-cols-[200px_minmax(500px,_1fr)_100px] gap-4">
          <div>
            <h2 className="font-bold text-2xl md:text-3xl">Kelas X RPL II</h2>
            <h2 className="font-bold text-2xl md:text-3xl text-tertiary">
              Minggu ke-1
            </h2>
          </div>
          <GridCard className=" z-20">
            <div className="grid md:grid-cols-2 mb-3">
              {/* Sudah Bayar */}
              <div
                onClick={() => setActiveSide("sudahBayar")}
                className={`${
                  activeSide === "sudahBayar"
                    ? "bg-gradient-to-t from-[#66ffc4] to-[#00D2D2] from-10% to-100% text-white"
                    : "bg-transparent text-[#525F7F] hover:text-black"
                }  py-5 px-6 rounded-xl text-3xl font-bold justify-center text-center cursor-pointer transition-all duration-300 select-none`}
              >
                <p className="tracking-wide ">Sudah Bayar</p>
              </div>

              {/* Belum Bayar */}
                <div
                onClick={() => setActiveSide("belumBayar")}
                className={`${
                  activeSide === "belumBayar"
                  ? "bg-gradient-to-t from-[#66ffc4] to-[#00D2D2] from-10% to-100% text-white "
                  : "bg-transparent text-[#525F7F] hover:text-black"
                } py-5 px-6 rounded-xl text-3xl font-bold justify-center text-center cursor-pointer transition-all duration-300 select-none`}
                >
                <p className="tracking-wide select-none">Belum Bayar</p>
                </div>
            </div>

            {activeSide === "sudahBayar" && (
              <div className="flex flex-col overflow-y-auto max-h-full-z-10">
                {Array.from({ length: 10 }).map((_, index) => (
                  <RecordItem
                    index={index}
                    key={index}
                    name={`Suiii ${index + 1}`}
                    username={`5122822${index}`}
                  />
                ))}
              </div>
            )}

            {activeSide === "belumBayar" && (
              <div className="flex flex-col overflow-y-auto max-h-full-z-10">
                {Array.from({ length: 3 }).map((_, index) => (
                  <RecordItem
                    index={index}
                    key={index}
                    name={`Suiii ${index + 1}`}
                    username={`5122822${index}`}
                  />
                ))}
              </div>
            )}
          </GridCard>
        </div>
      </UserPageLayout>
    </>
  );
};

export default Page;
