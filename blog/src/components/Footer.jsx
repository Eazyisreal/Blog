import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`${
        theme === "dark" ? "bg-primary" : "bg-secondary"
      } flex gap-8  py-[1.875rem] px-[4rem] `}
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
      <ul className="flex gap-[.875rem]">
        <li
          className={` inter text-2xl font-semibold ${
            theme === "dark" ? "text-secondary" : "text-primary"
          }`}
        >
          Twitter
        </li>
        <li
          className={` inter text-2xl font-semibold ${
            theme === "dark" ? "text-secondary" : "text-primary"
          }`}
        >
          LinkedIn
        </li>
        <li
          className={` inter text-2xl font-semibold ${
            theme === "dark" ? "text-secondary" : "text-primary"
          }`}
        >
          Instagram
        </li>
      </ul>
    </footer>
  );
}
