import Arrow from "../assets/icons/arrowD.svg";
import ArrowW from "../assets/icons/arrowW.svg";
import Image from "../assets/icons/Image.svg";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const blogDetails = [
  {
    title: "How to use React Context API",
    description:
      "In this article, we will learn how to use React Context API to manage state in a React application.",
    date: "June 12, 2021",
    link: "/blog/how-to-use-react-context-api",
    image: Image,
    tag: "React",
  },
  {
    title: "Migrating to Linear 101",
    description:
      "In this article, we will learn how to use React Context API to manage state in a React application.",
    date: "June 12, 2021",
    link: "/blog/how-to-use-react-context-api",
    image: Image,
    tag: "React",
  },
  {
    title: "Building your API Stack",
    description:
      "In this article, we will learn how to use React Context API to manage state in a React application.",
    date: "June 12, 2021",
    link: "/blog/how-to-use-react-context-api",
    image: Image,
    tag: "React",
  },
  {
    title:
      "Collaboration can make our teams stronger, and our individual designs better.",
    description:
      "Collaboration can make our teams stronger, and our individual designs better.",
    date: "June 12, 2021",
    link: "/blog/how-to-use-react-context-api",
    image: Image,
    tag: "Javascript",
  },
  {
    title: "How to use React Context API",
    description:
      "In this article, we will learn how to use React Context API to manage state in a React application.",
    date: "June 12, 2021",
    link: "/blog/how-to-use-react-context-api",
    image: Image,
    tag: "React",
  },
  {
    title: "How to use React Context API",
    description:
      "In this article, we will learn how to use React Context API to manage state in a React application.",
    date: "June 12, 2021",
    link: "/blog/how-to-use-react-context-api",
    image: Image,
    tag: "React",
  },
];
export default function BlogPost() {
  const { theme } = useTheme();

  return (
    <section
    id='blog'
      className={`${
        theme === "dark" ? "bg-primary" : "bg-secondary"
      } flex flex-col  py-[1.875rem] lg:px-[4rem] `}
    >
      <div className="flex flex-col gap-[1.875rem] py-0 px-4 lg:px-8 items-start">
        <div className="flex flex-col items-start gap-8">
          <h1
            className={` inter text-2xl font-semibold ${
              theme === "dark" ? "text-secondary" : "text-primary"
            }`}
          >
            All blog posts
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogDetails.map((item) => (
              <Link to={`/blog/${item.id}`}  key={item.title} className="flex flex-col gap-4">
                <img src={item.image} alt={item.title} />
                <div className="flex  flex-col gap-3">
                  <h3
                    className={`inter text-[.875rem] flex font-semibold text-[#6941C6]`}
                  >
                    {item.date}
                  </h3>
                  <div className="flex w-full justify-between">
                    <h1
                      className={`inter text-[1.125rem] font-semibold ${
                        theme === "dark" ? "text-secondary" : "text-[#1A1A1A]"
                      } `}
                    >
                      {item.title}
                    </h1>
                    <img src={theme === "dark" ? Arrow : ArrowW} alt="" />
                  </div>
                  <h2
                    className={`inter text-base ${
                      theme === "dark" ? "text-[#C0C5D0]" : "text-[#667085]"
                    } `}
                  >
                    {item.description}
                  </h2>
                  <button className="flex py-[.125rem] px-[.625rem] w-[6rem] justify-center items-center rounded-2xl bg-[#F9F5FF]">
                    {item.tag}
                  </button>
                </div>
              </Link>
            ))}
          </div>
          <hr
            className={`w-full ${
              theme === "dark" ? "bg-secondary" : "bg-primary"
            }`}
          />
        </div>
      </div>
    </section>
  );
}
