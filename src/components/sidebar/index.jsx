import React from "react";
import "./sidebar.scss";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineProduct } from "react-icons/ai";
import { IoCreateOutline, IoLogOutSharp } from "react-icons/io5";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogOut = (e) => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar__logo">
        <Link to={"/"}>
          <FaArrowAltCircleLeft />
        </Link>

        <span>Dashboard</span>
      </h2>
      <ul className="sidebar__collection">
        <li>
          <NavLink className="sidebar__link" to={"products"}>
            <AiOutlineProduct />
            <span>Products</span>
          </NavLink>
          <NavLink className="sidebar__link" to={"create"}>
            <IoCreateOutline />
            <span>Create Products</span>
          </NavLink>
        </li>
        <li onClick={handleLogOut} className="sidebar__btn sidebar__link">
          <IoLogOutSharp className="sidebar__btn__icon" />
          <span>Log out</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
