import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`${
        theme === "dark" ? "bg-primary" : "bg-secondary"
      } flex flex-col-reverse items-center sm:flex-row sm:items-start gap-8  py-[1.875rem] w-full px-2 sm:px-[4rem] `}
    >
      <section className="flex  items-start gap-[.875rem]">
        <h1
          className={` inter text-2xl font-semibold ${
            theme === "dark" ? "text-secondary" : "text-primary"
          }`}
        >
          © 2023
        </h1>
      </section>
      <ul className="flex flex-col sm:flex-row gap-[.875rem]">
        <li
          className={` inter sm:text-2xl font-semibold ${
            theme === "dark" ? "text-secondary" : "text-primary"
          }`}
        >
          Twitter
        </li>
        <li
          className={` inter sm:text-2xl font-semibold ${
            theme === "dark" ? "text-secondary" : "text-primary"
          }`}
        >
          LinkedIn
        </li>
        <li
          className={` inter sm:text-2xl font-semibold ${
            theme === "dark" ? "text-secondary" : "text-primary"
          }`}
        >
          Instagram
        </li>
      </ul>
    </footer>
  );
}
