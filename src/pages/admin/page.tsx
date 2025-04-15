'use client';
import React from 'react';
import UserPageLayout from '../../components/userPageLayout';
import { useNavigate } from 'react-router';

function HomePage() {
  const navigate = useNavigate();

  const handleButtonClick = (destination: string) => {
    switch (destination) {
      case 'Data User':
        navigate('/admin/data_user');
        break;
      case 'Create User':
        navigate('/admin/create_user');
        break;
      default:
        console.error('Unknown destination:', destination);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <UserPageLayout>
      <h1 className="text-3xl font-bold text-[#1b1b1b] mb-8">Dashboard</h1>

      <main className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-6 pt-4">
        {["Data User", "Create User"].map((title) => (
          <div key={title} className="relative w-full h-56 md:h-64 mx-auto bg-gradient-to-r from-[#00D2D2] to-[#66ffc4] rounded-lg shadow-lg flex items-center">
            <img
              src="/assets/texture/admin.svg"
              alt={title}
              className="rounded-lg object-cover w-full h-full"
            />
            <div className="absolute bottom-4 left-4">
              <p className="text-white font-bold italic text-3xl lg:text-4xl">{title}</p>
              <button
                onClick={() => handleButtonClick(title)}
                className="mt-2 bg-white hover:bg-gray-100 text-[#00D2D2] font-semibold text-sm py-2 px-8 rounded-full"
              >
                Lanjut
              </button>
            </div>
          </div>
        ))}
      </main>
      </UserPageLayout>
    </div>
  );
}

export default HomePage;
