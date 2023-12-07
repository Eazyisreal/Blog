import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

import Arrow from "../assets/icons/arrowD.svg";
import ArrowW from "../assets/icons/arrowW.svg";
import LoadingSpinner from "./LoadingSpinner";
import axios from 'axios';
import { useTheme } from "../context/ThemeContext";

export default function BlogDetails() {
    const { theme } = useTheme();
    const [blogList, setBlogList] = useState([]);
    const [blogDetails, setBlogDetails] = useState({});
    const [loadingList, setLoadingList] = useState(true);
    const [loadingDetails, setLoadingDetails] = useState(true);
    const { slug } = useParams();
    

    useEffect(() => {
        axios.get('http://localhost:8000/api/posts/')
            .then(response => {
                setBlogList(response.data);
                setLoadingList(false);
            })
            .catch(error => {
                console.error('Error fetching blog posts:', error);
                setLoadingList(false);
            });

    }, []);

    useEffect(() => {
        const apiUrl = `http://localhost:8000/api/posts/${slug}/`;    
        axios.get(apiUrl)
            .then(response => {
                setBlogDetails(response.data);
                setLoadingDetails(false);
            })
            .catch(error => {
                console.error('Error fetching post details:', error);
                setLoadingDetails(false);
            });
    }, [slug]);
    

    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' };
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', options).format(date);
      };
    

    return (
        <section className={`${theme === "dark" ? "bg-primary" : "bg-secondary"} flex flex-col py-[1.875rem] px-4 lg:px-[4rem]`}>
            <div className="flex py-[1.875rem] w-full px-0 gap-8">
                <div className=" hidden lg:flex flex-col w-1/4 gap-8 items-start">
                    {loadingList ? (
                        <LoadingSpinner />
                    ) : (
                        blogList.reverse().map(item => (
                            <Link to={`/blog/${item.slug}`} key={item.title} className="flex flex-col gap-4">
                                <img src={item.image} alt={item.title} />
                                <div className="flex  flex-col gap-3">
                                    <h3 className={`inter text-[.875rem] flex font-semibold text-[#6941C6]`}>
                                    {formatDate(item.pub_date)}
                                    </h3>
                                    <div className="flex w-full justify-between">
                                        <h1 className={`inter text-[1.125rem] font-semibold ${theme === "dark" ? "text-secondary" : "text-[#1A1A1A]"} `}>
                                            {item.title}
                                        </h1>
                                        <img src={theme === "dark" ? Arrow : ArrowW} alt="" />
                                    </div>
                                    <h2 className={`inter text-base ${theme === "dark" ? "text-[#C0C5D0]" : "text-[#667085]"} `}>
                                        {item.description}
                                    </h2>
                                    <button className="flex py-[.125rem] px-[.625rem] w-[6rem] justify-center items-center rounded-2xl bg-[#F9F5FF]">
                                        {item.tags}
                                    </button>
                                </div>
                            </Link>
                        ))
                    )}
                </div>

                <div className="flex flex-col gap-8 w-full items-start">
                    {loadingDetails ? (
                        <LoadingSpinner />
                    ) : (
                        <Link to={`/blog/${blogDetails.slug}`} key={blogDetails.title} className="flex w-full flex-col gap-4">
                            <h3 className={`inter text-[.875rem] flex font-semibold text-[#6941C6]`}>
                            {formatDate(blogDetails.pub_date)}
                            </h3>
                            <h1 className={`inter text-[1.125rem] font-semibold ${theme === "dark" ? "text-secondary" : "text-[#1A1A1A]"} `}>
                                {blogDetails.title}
                            </h1>
                            <img className='h-1/2' src={blogDetails.image} alt={blogDetails.title} />
                            <h2 className={`inter text-base ${theme === "dark" ? "text-[#C0C5D0]" : "text-[#667085]"} `}>
                                {blogDetails.content}
                            </h2>
                        </Link>
                    )}
                </div>
            </div>
        </section>
    )
}
