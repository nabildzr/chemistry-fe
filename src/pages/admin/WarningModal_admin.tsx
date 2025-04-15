import React from 'react';

interface WarningModalProps {
  onClose: () => void;
}

const WarningModal_admin: React.FC<WarningModalProps> = ({ onClose }) => {
  const handleLogout = () => {
    // Add any logout logic here (e.g., clearing session, user data, etc.)
    window.location.href = "http://localhost:3000/"; // Redirect to the home page
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-[90%] max-w-md">
        <h2 className="text-xl font-bold mb-4 translate-x-[140px]">WARNING!</h2>
        <p className="text-gray-600 mb-6">
          Apakah kamu mau log out? data pun yang belum disimpan akan hilang.
        </p>
        <div className="flex justify-end space-x-4">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md translate-x-[-170px]"
            onClick={onClose}
          >
            tidak
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md translate-x-[-50px]"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default WarningModal_admin;