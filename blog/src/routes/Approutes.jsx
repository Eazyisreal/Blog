import { Route, Routes } from "react-router-dom";

import About from "../pages/About";
import BlogDetails from "../pages/BlogDetails";
import Home from "../pages/Home";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/blog/:slug" element={<BlogDetails />}/>
      </Routes>
    </>
  );
}
