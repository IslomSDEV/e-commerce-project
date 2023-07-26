import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import { Route, Routes } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Home from "../pages/Home/Home";
import BlogAbout from "../pages/Home/components/Blog/Blog";
import LikePage from "../pages/LikePage/LikePage";
import AboutProduct from "../pages/AboutProduct/AboutProduct";
import Profile from "../pages/Profile/Profile";

function AppRoutes() {
  const token = localStorage.getItem("accessToken");
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
          path="/products/about/:id"
          element={
            <>
              <AboutProduct />
            </>
          }
        />
        <Route path="/profile" element={<>{token ? <Profile /> : ""}</>} />
      </Routes>
      {/* {token ? <PrivateRoutes /> : <PublicRoutes />} */}
    </>
  );
}
export default AppRoutes;
