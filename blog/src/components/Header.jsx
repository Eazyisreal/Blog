import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from "react";

import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../context/ThemeContext";

const handleThemeChange = () => { };
export default function Header() {

  const location = useLocation();
  const handleScrollToBlog = () => {
    const blogSection = document.getElementById("blog");
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    if (location.hash === '#blog') {
      handleScrollToBlog();
    }
  }, [location]);

  const { theme } = useTheme();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header
      className={`${theme === "dark" ? "bg-primary" : "bg-secondary"
        } flex py-2 sm:py-[1.875rem] px-4 sm:px-8 lg:px-[4rem] w-full`}
    >
      <nav className="flex w-full items-center py-[.625rem] px-0 justify-between">
        <Link to='/'>
          <h1
            className={`${theme === "dark" ? "text-secondary" : "text-primary"
              } text-xl uppercase inter font-semibold`}
          >
            Eazyisreal
          </h1>
        </Link>
        <ul className="hidden sm:flex gap-[.875rem]">
          <Link onClick={handleScrollToBlog}>
            <li
              className={`${theme === "dark"
                ? "text-secondary  hover:text-secondary"
                : "text-[#1A1A1A] hover:text-primary"
                }  text-opacity-50  hover:underline inter text-xl font-bold`}
            >
              Blog
            </li>
          </Link>
          <li
            className={`${theme === "dark"
              ? "text-secondary hover:text-secondary"
              : "text-[#1A1A1A] hover:text-primary"
              }  text-opacity-50  hover:underline inter text-xl font-bold`}
          >
            Projects
          </li>
          <Link to='/about'>
              <li
                className={`${theme === "dark"
                  ? "text-secondary hover:text-secondary"
                  : "text-[#1A1A1A] hover:text-primary"
                  }  text-opacity-50 inter text-xl font-bold`}
              >
                About
              </li>
            </Link>
          <ThemeToggle onThemeChange={handleThemeChange} />
        </ul>

        {isMobileMenuOpen ? (
          <div className="sm:hidden " onClick={toggleMobileMenu}>
            <span
              className={`block h-0.5 w-6 ${theme === "dark" ? 'bg-white' : 'bg-[#202020]'} mb-1 transform transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
            ></span>
            <span
              className={`block h-0.5 w-6 ${theme === "light" ? 'bg-[#202020]' : 'bg-white'} mb-1 transform transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
            ></span>
          </div>
        ) : (
          <div className="sm:hidden " onClick={toggleMobileMenu}>
            <span
              className={`block h-0.5 w-6 ${theme === "light" ? 'bg-[#202020]' : 'bg-white'} mb-1 transform transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
            ></span>
            <span
              className={`block h-0.5 w-6 ${theme === "light" ? 'bg-[#202020]' : 'bg-white'} mb-1 transform transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
            ></span>
            <span
              className={`block h-0.5 w-6 ${theme === "light" ? 'bg-[#202020]' : 'bg-white'} mb-1 transform transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
            ></span>
          </div>
        )}
        {isMobileMenuOpen && (
          <ul className={` sm:hidden flex flex-col gap-12 w-full items-center  absolute z-20 h-full left-0 top-[10.5%] ${theme === "dark" ? 'bg-primary' : 'bg-secondary'} bg-opacity-90`}>
              <Link onClick={handleScrollToBlog}>
            <li
              className={`${theme === "dark"
                ? "text-secondary  hover:text-secondary"
                : "text-[#1A1A1A] hover:text-primary"
                }  text-opacity-50  hover:underline inter text-xl font-bold`}
            >
              Blog
            </li>
          </Link>
            <li
              className={`${theme === "dark"
                ? "text-secondary hover:text-secondary"
                : "text-[#1A1A1A] hover:text-primary"
                }  text-opacity-50 inter text-xl font-bold`}
            >
              Projects
            </li>
            <Link to='/about'>
              <li
                className={`${theme === "dark"
                  ? "text-secondary hover:text-secondary"
                  : "text-[#1A1A1A] hover:text-primary"
                  }  text-opacity-50 inter text-xl font-bold`}
              >
                About
              </li>
            </Link>
            <ThemeToggle onThemeChange={handleThemeChange} />
          </ul>
        )}
      </nav>
    </header>
  );
}
