/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const toggleMobileNav = () => {
    setIsMobileNavOpen((prev) => !prev);
  };
  const hamburgerIcon = (
    <button
      className="md:hidden flex flex-col space-y-1 mt-2"
      aria-label="Toggle Mobile Menu"
      onClick={toggleMobileNav}
    >
      <span className="w-6 h-1 bg-gray-600"></span>
      <span className="w-6 h-1 bg-gray-600"></span>
      <span className="w-6 h-1 bg-gray-600"></span>
    </button>
  );
  const closeIcon = (
    <button
      className="md:hidden flex items-center"
      aria-label="Close Mobile Menu"
      onClick={() => setIsMobileNavOpen(false)}
    >
      <svg
        className="w-6 h-6 text-gray-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
  return (
    <div>
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`fixed top-0 left-0 w-full p-5 bg-white z-50 transition-shadow ${
            isScrolled ? "shadow-lg" : "shadow-md"
          }`}
        >
          <div className="flex items-center justify-between">
            <div
                className="flex gap-4 cursor-pointer"
                onClick={() => navigate("/")}
            >
                <h1 className="text-xl font-bold text-gray-800">
                  Matthew Boladele <span className="text-green-600">Akanle</span>
                </h1>
                <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Prof. Foluso Ayeni"
                className="rounded-lg shadow-2xl w-6"
                />
            </div>
            <ul className="flex space-x-4">
                <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                    isActive
                        ? "text-green-600 font-semibold"
                        : "text-gray-600 hover:text-green-500 transition-colors"
                    }
                >
                    Home
                </NavLink>
                </li>
                <li>
                <NavLink
                    to="/resume"
                    className={({ isActive }) =>
                    isActive
                        ? "text-green-600 font-semibold"
                        : "text-gray-600 hover:text-green-500 transition-colors"
                    }
                >
                    CV/Resume
                </NavLink>
                </li>
                <li>
                <NavLink
                    to="/research"
                    className={({ isActive }) =>
                    isActive
                        ? "text-green-600 font-semibold"
                        : "text-gray-600 hover:text-green-500 transition-colors"
                    }
                >
                    Research & Teaching
                </NavLink>
                </li>
                <li>
                <NavLink
                    to="/publications"
                    className={({ isActive }) =>
                    isActive
                        ? "text-green-600 font-semibold"
                        : "text-gray-600 hover:text-green-500 transition-colors"
                    }
                >
                    Publications
                </NavLink>
                </li>
                <li>
                <NavLink
                    to="/media"
                    className={({ isActive }) =>
                    isActive
                        ? "text-green-600 font-semibold"
                        : "text-gray-600 hover:text-green-500 transition-colors"
                    }
                >
                  Media
                </NavLink>
                </li>
                <li>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                    isActive
                        ? "text-green-600 font-semibold"
                        : "text-gray-600 hover:text-green-500 transition-colors"
                    }
                >
                    Contact
                </NavLink>
                </li>
            </ul>
          </div>
          
        </motion.nav>
      </div>
      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className={`fixed top-0 left-0 w-full p-2 bg-white z-50 transition-shadow ${
            isScrolled ? "shadow-lg" : "shadow-md"
          } flex justify-between`}>
          {/* Logo */}
          <div
            className="flex gap-4 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <h1 className="text-xl font-bold text-gray-800">
              Prof. Foluso <span className="text-green-600">Ayeni</span>
            </h1>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Prof. Foluso Ayeni"
              className="rounded-lg shadow-2xl w-6"
            />
          </div>
          {isMobileNavOpen ? closeIcon : hamburgerIcon}
        </div>
        {isMobileNavOpen && (
          <div
            onClick={() => setIsMobileNavOpen(false)}
            className="fixed w-full h-full top-0 left-0 bg-black/25 z-50 md:hidden overflow-hidden"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute h-full left-0 top-0 w-60 bg-white z-[999] px-5 border-r overflow-y-hidden flex flex-col gap-10"
            >
              <ul className="space-y-6 text-[#121212] font-[400] text-lg text-center p-8 mt-10">
                <li onClick={() => setIsMobileNavOpen(false)}>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-green-600 font-semibold"
                        : "text-gray-600 hover:text-green-500 transition-colors"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li onClick={() => setIsMobileNavOpen(false)}>
                  <NavLink
                    to="/resume"
                    className={({ isActive }) =>
                      isActive
                        ? "text-green-600 font-semibold"
                        : "text-gray-600 hover:text-green-500 transition-colors"
                    }
                  >
                    CV/Resume
                  </NavLink>
                </li>
                <li onClick={() => setIsMobileNavOpen(false)}>
                  <NavLink
                    to="/research"
                    className={({ isActive }) =>
                      isActive
                        ? "text-green-600 font-semibold"
                        : "text-gray-600 hover:text-green-500 transition-colors"
                    }
                  >
                    Research & Teaching
                  </NavLink>
                </li>
                <li onClick={() => setIsMobileNavOpen(false)}>
                  <NavLink
                    to="/publications"
                    className={({ isActive }) =>
                      isActive
                        ? "text-green-600 font-semibold"
                        : "text-gray-600 hover:text-green-500 transition-colors"
                    }
                  >
                    Publications
                  </NavLink>
                </li>
                <li onClick={() => setIsMobileNavOpen(false)}>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "text-green-600 font-semibold"
                        : "text-gray-600 hover:text-green-500 transition-colors"
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        )}
        {/* <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="flex items-center justify-between p-5 bg-white shadow-md"
        >
          <ul className="flex space-x-4"></ul>
        </motion.nav> */}
      </div>
    </div>
  );
};

export default Navbar;
