import React from "react";
import { useState } from "react";
import logo from "./logo.jpeg";
import "./Header.scss";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { classNames } from "../../../shared/helpers";
const Header = () => {
  return (
    <div className={classNames("header")}>
      <div className={classNames("header__wrapp")}>
        <div className={classNames("header__logo")}>
          <img src={logo} alt="" />
        </div>
        <ul>
          <li>
            <Link>Главная</Link>
          </li>
          <li>
            <Link>О компании</Link>
          </li>
          <li>
            <Link>Услуги</Link>
          </li>
          <li>
            <Link>Контакты</Link>
          </li>
        </ul>
        <div className={classNames("header__right")}>
          <div className={classNames("header__favorite")}>
            <FavoriteIcon style={{ color: "red" }} />
          </div>
          <div className={classNames("header__phone")}>
            <LocalPhoneIcon style={{ color: "#0073E1" }} />
            <span>+996 507 688 388</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
