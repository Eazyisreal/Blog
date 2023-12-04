import { useEffect, useState } from 'react';

import Arrow from "../assets/icons/arrowD.svg";
import ArrowW from "../assets/icons/arrowW.svg";
import {Link} from 'react-router-dom'
import axios from 'axios';
import { useTheme } from "../context/ThemeContext";

// const blogDetails = [
//   {
//     title: "How to use React Context API",
//     description:
//       "In this article, we will learn how to use React Context API to manage state in a React application.",
//     date: "June 12, 2021",
//     link: "/blog/how-to-use-react-context-api",
//     image: Image,
//     tag: "React",
//   },
//   {
//     title: "Migrating to Linear 101",
//     description:
//       "In this article, we will learn how to use React Context API to manage state in a React application.",
//     date: "June 12, 2021",
//     link: "/blog/how-to-use-react-context-api",
//     image: Image1,
//     tag: "React",
//   },
//   {
//     title: "Building your API Stack",
//     description:
//       "In this article, we will learn how to use React Context API to manage state in a React application.",
//     date: "June 12, 2021",
//     link: "/blog/how-to-use-react-context-api",
//     image: Image1,
//     tag: "React",
//   },
//   {
//     title: "Grid system for better Design User Interface",
//     description:
//       "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
//     date: "June 12, 2021",
//     link: "/blog/how-to-use-react-context-api",
//     image: Image,
//     tag: "Javascript",
//   },
//   {
//     title: "How to use React Context API",
//     description:
//       "In this article, we will learn how to use React Context API to manage state in a React application.",
//     date: "June 12, 2021",
//     link: "/blog/how-to-use-react-context-api",
//     image: Image,
//     tag: "React",
//   },
//   {
//     title: "How to use React Context API",
//     description:
//       "In this article, we will learn how to use React Context API to manage state in a React application.",
//     date: "June 12, 2021",
//     link: "/blog/how-to-use-react-context-api",
//     image: Image,
//     tag: "React",
//   },
//   {
//     title: "How to use React Context API",
//     description:
//       "In this article, we will learn how to use React Context API to manage state in a React application.",
//     date: "June 12, 2021",
//     link: "/blog/how-to-use-react-context-api",
//     image: Image,
//     tag: "React",
//   },
//   {
//     title: "How to use React Context API",
//     description:
//       "In this article, we will learn how to use React Context API to manage state in a React application.",
//     date: "June 12, 2021",
//     link: "",
//     image: Image,
//     tag: "React",
//   },
// ];

export default function BlogHeader() {
  const { theme } = useTheme();
  const [blogPost, setBlogPost] = useState([]);
  

  
  useEffect(() => {
    axios.get('http://localhost:8000/api/posts/')
      .then(response => setBlogPost(response.data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);


  const renderBlogPost = (blogPost) => (
    <Link to={`/blog/${blogPost.slug}`} key={blogPost.title} className={`flex w-full flex-col gap-8 `}>
      <img src={blogPost.image} alt={blogPost.title} />
      <div className="flex flex-col gap-3">
        <h3
          className={`inter text-[.875rem] flex font-semibold text-[#6941C6]`}
        >
          {blogPost.pub_date}
        </h3>
        <div className="flex w-full justify-between">
          <h1
            className={`inter text-2xl font-semibold ${
              theme === "dark" ? "text-secondary" : "text-[#1A1A1A]"
            } `}
          >
            {blogPost.title}
          </h1>
          <img src={theme === "dark" ? Arrow : ArrowW} alt="" />
        </div>
        <h2
          className={`inter text-base ${
            theme === "dark" ? "text-[#C0C5D0]" : "text-[#667085]"
          } `}
        >
          {blogPost.description}
        </h2>
        <button className="flex py-[.125rem] px-[.625rem] w-[6rem] justify-center items-center rounded-2xl bg-[#F9F5FF]">
          {blogPost.tag}
        </button>
      </div>
    </Link>
  );
  return (
    <section
      className={`${
        theme === "dark" ? "bg-primary" : "bg-secondary"
      } flex flex-col  py-[1.875rem] lg:px-[4rem] `}
    >
      <div className={`flex py-[1.875rem] px-0 flex-col  gap-16`}>
        <div className="flex flex-col gap-8 items-start py-0 px-4 lg:px-8">
          <h1
            className={` inter text-2xl font-semibold ${
              theme === "dark" ? "text-secondary" : "text-primary"
            }`}
          >
            Recent blog posts
          </h1>
          <div className="flex w-full gap-8">
          {blogPost.length > 0 && renderBlogPost(blogPost[0])}

            <div className=" hidden lg:flex flex-col w-full justify-center gap-4">
              {blogPost.slice(1, 3).map((blogPost) => (
                <Link to={`/blog/${blogPost.slug}`}  key={blogPost.title} className={`flex w-full gap-8 `}>
                  <img
                    className="w-1/2"
                    src={blogPost.image}
                    alt={blogPost.title}
                  />
                  <div className="flex w-1/2 flex-col gap-3">
                    <h3
                      className={`inter text-[.875rem] flex font-semibold text-[#6941C6]`}
                    >
                      {blogPost.pub_date}
                    </h3>
                    <div className="flex w-full justify-between">
                      <h1
                        className={`inter text-[1.125rem] font-semibold ${
                          theme === "dark" ? "text-secondary" : "text-[#1A1A1A]"
                        } `}
                      >
                        {blogPost.title}
                      </h1>
                      <img src={theme === "dark" ? Arrow : ArrowW} alt="" />
                    </div>
                    <h2
                      className={`inter text-base ${
                        theme === "dark" ? "text-[#C0C5D0]" : "text-[#667085]"
                      } `}
                    >
                      {blogPost.description}
                    </h2>
                    <button className="flex py-[.125rem] px-[.625rem] w-[6rem] justify-center items-center rounded-2xl bg-[#F9F5FF]">
                      {blogPost.tag}
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:hidden flex flex-col w-full justify-center gap-4">
              {blogPost.slice(1, 3).map((blogPost) => (
                <Link to={`/blog/${blogPost.slug}`}  key={blogPost.title} className={`flex flex-col sm:flex-row w-full gap-8 `}>
                  <img
                    className=""
                    src={blogPost.image}
                    alt={blogPost.title}
                  />
                  <div className="flex flex-col gap-3">
                    <h3
                      className={`inter text-[.875rem] flex font-semibold text-[#6941C6]`}
                    >
                      {blogPost.pub_date}
                    </h3>
                    <div className="flex w-full justify-between">
                      <h1
                        className={`inter text-[1.125rem] font-semibold ${
                          theme === "dark" ? "text-secondary" : "text-[#1A1A1A]"
                        } `}
                      >
                        {blogPost.title}
                      </h1>
                      <img src={theme === "dark" ? Arrow : ArrowW} alt="" />
                    </div>
                    <h2
                      className={`inter text-base ${
                        theme === "dark" ? "text-[#C0C5D0]" : "text-[#667085]"
                      } `}
                    >
                      {blogPost.description}
                    </h2>
                    <button className="flex py-[.125rem] px-[.625rem] w-[6rem] justify-center items-center rounded-2xl bg-[#F9F5FF]">
                      {blogPost.tag}
                    </button>
                  </div>
                </Link>
              ))}
            </div>
        </div>
        {blogPost.slice(3, 4).map((blogPost) => (
                <Link to={`/blog/${blogPost.slug}`}  key={blogPost.title} className={`flex flex-col px-4 lg:px-0 lg:flex-row w-full gap-8 `}>
                  <img
                    className=""
                    src={blogPost.image}
                    alt={blogPost.title}
                  />
                  <div className="flex  flex-col gap-3">
                    <h3
                      className={`inter text-[.875rem] flex font-semibold text-[#6941C6]`}
                    >
                      {blogPost.pub_date}
                    </h3>
                    <div className="flex w-full justify-between">
                      <h1
                        className={`inter text-[1.125rem] font-semibold ${
                          theme === "dark" ? "text-secondary" : "text-[#1A1A1A]"
                        } `}
                      >
                        {blogPost.title}
                      </h1>
                      <img src={theme === "dark" ? Arrow : ArrowW} alt="" />
                    </div>
                    <h2
                      className={`inter text-base ${
                        theme === "dark" ? "text-[#C0C5D0]" : "text-[#667085]"
                      } `}
                    >
                      {blogPost.description}
                    </h2>
                    <button className="flex py-[.125rem] px-[.625rem] w-[6rem] justify-center items-center rounded-2xl bg-[#F9F5FF]">
                      {blogPost.tag}
                    </button>
                  </div>
                </Link>
              ))}
      </div>
    </section>
  );
}
