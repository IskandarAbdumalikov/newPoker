import React, { useState } from "react";
import headerLogo from "../../../assets/logo.svg";
import "./header.scss";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Header = () => {
  const [showList, setShowList] = useState(false);
  let isLogin = localStorage.getItem("x-auth-token");
  console.log(isLogin);

  return (
    <header className="header">
      <div className="container">
        {showList ? (
          <div onClick={() => setShowList(false)} className="overlay"></div>
        ) : (
          <></>
        )}
        <nav className="header__navbar">
          <div className="header__left">
            <h2 className="header__logo">
              <img src={headerLogo} alt="" />
            </h2>
          </div>
          <div className="header__right">
            <ul
              className={`header__list  ${showList ? "header__showList" : ""} `}
            >
              <li className="header__item">
                <NavLink to="/" className={"header__link"}>
                  Home
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink to="/category" className={"header__link"}>
                  Category
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink to="/about" className={"header__link"}>
                  About us
                </NavLink>
              </li>
              {isLogin ? (
                <></>
              ) : (
                <li className="header__item">
                  <NavLink to="/register" className={"header__link"}>
                    Register
                  </NavLink>
                </li>
              )}
              {showList ? (
                <li
                  onClick={() => setShowList(false)}
                  className="header__closer"
                >
                  <IoMdCloseCircleOutline />
                </li>
              ) : (
                <></>
              )}
            </ul>
            <div className="header__btns">
              <button className="login__btn">
                {isLogin ? (
                  <NavLink
                    className={"header__link__btn"}
                    to={"admin/products"}
                  >
                    Admin
                  </NavLink>
                ) : (
                  <NavLink to="/login" className={"header__link__btn"}>
                    Login
                  </NavLink>
                )}
              </button>
              <button
                onClick={() => setShowList(true)}
                className="header__humburger"
              >
                <FaBars />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
