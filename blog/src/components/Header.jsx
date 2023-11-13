import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../context/ThemeContext";

const handleThemeChange = () => { };
export default function Header() {
  const { theme } = useTheme("");

  return (
    <header
      className={`${theme === "dark" ? "bg-primary" : "bg-secondary"
        } flex py-[1.875rem] px-[4rem] w-full`}
    >
      <nav className="flex w-full items-center py-[.625rem] px-0 justify-between">
        <h1
          className={`${theme === "dark" ? "text-secondary" : "text-primary"
            } text-xl uppercase inter font-semibold`}
        >
          Eazyisreal
        </h1>
        <ul className="flex gap-[.875rem]">
          <li
            className={`${theme === "dark"
                ? "text-secondary  hover:text-secondary"
                : "text-[#1A1A1A] hover:text-primary"
              }  text-opacity-50  hover:underline inter text-xl font-bold`}
          >
            Blog
          </li>
          <li
            className={`${theme === "dark"
                ? "text-secondary hover:text-secondary"
                : "text-[#1A1A1A] hover:text-primary"
              }  text-opacity-50  hover:underline inter text-xl font-bold`}
          >
            Projects
          </li>
          <li
            className={`${theme === "dark"
                ? "text-secondary hover:text-secondary"
                : "text-[#1A1A1A] hover:text-primary"
              }  text-opacity-50  hover:underline inter text-xl font-bold`}
          >
            About
          </li>
          <ThemeToggle onThemeChange={handleThemeChange} />
        </ul>
      </nav>
    </header>
  );
}
