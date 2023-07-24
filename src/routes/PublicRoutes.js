import React from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import Home from "../pages/Home/Home";
import BlogAbout from "../pages/Home/components/Blog/Blog";
import LikePage from "../pages/LikePage/LikePage";
import AboutProduct from "../pages/AboutProduct/AboutProduct";
import Profile from "../pages/Profile/Profile";

function PublicRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/blog"
          element={
            <>
              <Blog />
              <BlogAbout />
            </>
          }
        />
        <Route
          path="/like"
          element={
            <>
              <LikePage />
            </>
          }
        />
        <Route
          path="/products/about"
          element={
            <>
              <AboutProduct />
            </>
          }
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default PublicRoutes;
