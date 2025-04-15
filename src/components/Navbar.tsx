
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
// import NavbarLayoutProps from "../types/navbarLayout";
import { logout } from "../services/api/auth";

const NavbarLayout = () => {
  const { pathname } = useLocation();
  const [showBar, setShowBar] = useState<Boolean>(false);
  const [showNav, setShowNav] = useState<Boolean>(false);
  // const navigate = useNavigate();

  const toggleBar = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    const hiddenBarPaths = {
      signin: "/signin",
      signup: "/signup",
      ori: "/",
      notFound: "/not-",
        };

    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      setShowBar(false);
      return;
    }

    // Bar visibility
    if (Object.values(hiddenBarPaths).includes(pathname as string)) {
      setShowBar(false);
    } else {
      setShowBar(true);
    }
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navElement = document.querySelector(".sm\\:flex");
      if (navElement && !navElement.contains(event.target as Node)) {
        setShowNav(false);
      }
    };

    if (showNav) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showNav]);

  const handleLogout = async () => {
    logout();

    window.location.href="/"
  };
  return (
    <>
      {showBar && (
        <div className="sticky top-0 z-90 w-full px-6 bg-white border-[#EEF0F7] border-b-2">
          <nav className="flex justify-between items-center py-4">
            <Link
              to={"/"}
              className="text-lg font-bold flex items-center rubik-mono-one-regular gap-2"
            >
              <img
                src="/assets/chemistry-logo.png"
                alt="Logo"
                width={50}
                height={50}
                className=""
              />
              <img
                src="/assets/chemistry-wordmark.png"
                alt="Logo"
                width={150}
                height={50}
                className=""
              />
            </Link>
            <div className="md:flex md:space-x-4 items-center">
              {/* Burger menu icon for mobile */}
              <button onClick={toggleBar} className="block md:hidden">
                <div className="relative w-6 h-6 flex flex-col justify-between">
                  <span
                    className={`block h-1 w-6 bg-black rounded transition-all duration-300 ${
                      showNav ? "rotate-45 translate-y-2.5" : ""
                    }`}
                  ></span>
                  <span
                    className={`block h-1 w-6 bg-black rounded transition-all duration-300 ${
                      showNav ? "opacity-0" : ""
                    }`}
                  ></span>
                  <span
                    className={`block h-1 w-6 bg-black rounded transition-all duration-300 ${
                      showNav ? "-rotate-45 -translate-y-2.5" : ""
                    }`}
                  ></span>
                </div>
              </button>

              {/* Navigation links - shown based on showNav state on mobile */}
              <div
                className={`${
                  showNav ? "block" : "hidden"
                }  sm:flex md:space-x-4 absolute md:static top-16 right-6 bg-[#EEF0F7] md:bg-transparent  flex gap-2 sm:gap-0  p-4 md:p-0 shadow-2xl md:shadow-none rounded`}
              >
                <Link to={"/profile"} className="">
                  <div className="transition-all duration-300 inline-flex items-center justify-center rounded-full hover:border-2 border-2 border-transparent hover:border-black p-1">
                    <img
                      src="/assets/icon/user.svg"
                      alt="User"
                      width={35}
                      height={35}
                      className=""
                    />
                  </div>
                </Link>
                <button
                  onClick={handleLogout}
                  className="cursor-pointer transition-all duration-300 inline-flex items-center justify-center rounded-full hover:border-2 border-2 border-transparent hover:border-black p-1"
                >
                  <img
                  src="/assets/icon/logout-2.svg"
                  alt="Logout"
                  width={35}
                  height={35}
                  className=""
                  />
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default NavbarLayout;
