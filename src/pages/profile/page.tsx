import "react-circular-progressbar/dist/styles.css";
import { useLocation } from "react-router";
import TitleWithPath from "../../components/TitleWithPath";
import UserPageLayout from "../../components/userPageLayout";

function Page() {
  const currentPath = useLocation();


  return (
    <>
      <div className="min-h-screen bg-white">
        <UserPageLayout>
          {/* title */}
          <TitleWithPath currentPath={currentPath.pathname} previousPath="Dashboard" />

          {/* Profile Section */}
          <div className="flex justify-center ">
            <div className="bg-white border border-gray-300 rounded-lg p-8 shadow-lg w-full max-w-3xl flex flex-col lg:flex-row lg:items-center lg:space-x-8">
              {/* Profile Image */}
              <div className="flex justify-center lg:justify-start items-center mb-8 lg:mb-0">
                <img
                  src="/assets/icon/user.svg"
                  alt="Profile Picture"
                  width={200}
                  height={200}
                  className="lg:ml-8 lg:mr-8"
                />
              </div>

              {/* Profile Details */}
              <div className="flex flex-col w-full">
                {/* Input Fields */}
                <div className="grid gap-8">
                  <div>
                    <label className="block text-black text-xl font-bold mb-2">
                      Nama
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      readOnly
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00e5c7]"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-black text-xl font-bold mb-2">
                      Username
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      readOnly
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00e5c7]"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-black text-xl font-bold mb-2">
                        Status
                      </label>
                      <input
                        type="text"
                        defaultValue=""
                        readOnly
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00e5c7]"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-black text-xl font-bold mb-2">
                        Gender
                      </label>
                      <input
                        type="text"
                        defaultValue=""
                        readOnly
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00e5c7]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </UserPageLayout>
      </div>
    </>
  );
}

export default Page;
