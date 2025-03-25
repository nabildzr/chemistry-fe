"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ConfirmationModal from "./hapus_user"; // Import the delete modal component
import TitleWithPath from "@/components/TitleWithPath";
import UserPageLayout from "@/components/userPageLayout";

function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState({ name: "", username: "" }); // Changed 'nis' back to 'username'
  const router = useRouter();

  const handleButtonClick = (action: string) => {
    if (action === "Edit_user") {
      router.push("/admin/data_user/edit_user");
    }
  };

  const handleDeleteUser = (user: { name: string; username: string }) => {
    setSelectedUser(user);
    setIsModalOpen(true); // Open the delete confirmation modal
  };

  return (
    <div className="min-h-screen bg-white overflow-y-auto">

    <UserPageLayout>
    <TitleWithPath currentPath={'Data User'} previousPath="Admin" />

      {/* User List */}
      <div className="bg-white rounded-lg shadow p-4">
        {Array(17)
          .fill(0)
          .map((_, index) => {
            const user = {
              name: `User ${index + 1}`,
              username: `Username${index + 1}`, // Changed 'nis' back to 'username'
            };

            return (
              <div
                key={index}
                className="grid grid-cols-12 gap-4 items-center py-4 border-b"
              >
                <div className="col-span-4 flex items-center">
                  <Image
                    src="/assets/icon/user.svg"
                    alt="User"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.username}</p>
                  </div>
                </div>
                <div className="col-span-8 flex justify-end space-x-2">
                  <button
                    className="flex flex-col items-center justify-center w-12 h-12 md:w-auto md:h-auto md:flex-row md:px-8 md:py-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
                    onClick={() => handleButtonClick("Edit_user")}
                  >
                    <Image
                      src="/assets/icon/edit.svg"
                      alt="Edit Icon"
                      width={16}
                      height={16}
                      className="md:mr-2"
                    />
                    <span className="hidden md:block">Edit User</span>
                  </button>
                  <button
                    className="flex flex-col items-center justify-center w-12 h-12 md:w-auto md:h-auto md:flex-row md:px-8 md:py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
                    onClick={() => handleDeleteUser(user)}
                  >
                    <Image
                      src="/assets/icon/delete.svg"
                      alt="Delete Icon"
                      width={16}
                      height={16}
                      className="md:mr-2"
                    />
                    <span className="hidden md:block">Hapus User</span>
                  </button>
                </div>
              </div>
            );
          })}
      </div>

      {/* Confirmation Modal */}
      {isModalOpen && (
        <ConfirmationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          user={selectedUser} // Now passing { name, username } correctly
        />
      )}
      </UserPageLayout>
    </div>
  );
}

export default Page;
