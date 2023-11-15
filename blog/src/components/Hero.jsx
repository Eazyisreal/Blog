import { useTheme } from "../context/ThemeContext";

function Hero() {
  const { theme } = useTheme();

  return (
    <section
      className={`${theme === "dark" ? "bg-primary" : "bg-secondary"
        } gap-[3.12rem] flex-col flex w-full justify-center items-center py-[1.875rem] px-[4rem]`}
    >
      <div className="flex flex-col items-center justify-center  w-full">
        <hr className={`w-full ${theme  === "dark" ? 'bg-secondary' : 'bg-primary'}`} />

        <h1 className={`${theme  === "dark" ? 'text-secondary' : 'text-primary'} inter text-[12.235rem]  font-bold`}>
          THE BLOG
        </h1>
        <hr className={`w-full ${theme  === "dark" ? 'bg-secondary' : 'bg-primary'}`} />
      </div>
    </section>
  );
}

export default Hero;
