import { Route, Routes } from "react-router-dom";

import BlogDetails from "../pages/BlogDetails";
import Home from "../pages/Home";
import About from "../pages/About";


export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/blog/:id" element={<BlogDetails />}/>
      </Routes>
    </>
  );
}
