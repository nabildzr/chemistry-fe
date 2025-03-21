"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const NavbarLayout = ({ children }: { children: React.ReactNode }) => {

  const pathname = usePathname();
  const [showNav, setShowNav] = useState<Boolean>(false);

  useEffect(() => {
      const hiddenNavPaths = {
        signin: '/signin',
        signup: '/signup',
      };
      
      if(Object.values(hiddenNavPaths).includes(pathname)) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
  }, [pathname])

  return (
   <>
   {showNav &&  <div className="fixed w-full px-6 bg-white border-gray-1">
      <nav className="flex justify-between items-center py-4">
        <Link href={"/"} className="text-lg font-bold flex items-center rubik-mono-one-regular gap-2">
          <Image src="/assets/chemistry-logo.png" alt="Logo" width={50} height={50} className="" />
          <Image src="/assets/chemistry-wordmark.png" alt="Logo" width={150} height={50} className="" />
        </Link>
        <div className="flex space-x-4">
          <Link href={'/profile'}>
            <Image src="/assets/icon/user.svg" alt='User' width={35} height={35} className=""  />
            </Link>

          <Link href={'/logout'}>
          <Image src="/assets/icon/logout.svg" alt='Logout' width={35} height={35} className=""  />
          </Link>
        </div>
      </nav>
    </div>}
    {children}
   </>
  );
};

export default NavbarLayout;