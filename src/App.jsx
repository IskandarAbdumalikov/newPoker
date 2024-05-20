import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import About from "./pages/about/About";
import Header from "./components/layout/header/Header";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Auth from "./pages/auth/Auth";
import Admin from "./pages/admin";
import Footer from "./components/layout/footer/Footer";
import Category from "./pages/category/Category";
import AdminProducts from "./pages/admin/adminProducts";
import CreateProducts from "./pages/admin/createProducts";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/:id" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />}>
            <Route path="products" element={<AdminProducts />} />
            <Route path="create" element={<CreateProducts />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
