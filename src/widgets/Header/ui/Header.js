import React, { useEffect, useState } from "react";
import logoIcon from "../../../shared/assets/svg/logo.svg";
import "./Header.scss";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { classNames } from "../../../shared/helpers";
import { slide as Menu } from "react-burger-menu";
import { PlusOutlined } from "@ant-design/icons";

const Header = () => {
  const renderLinks = [
    {
      name: "Главная",
      to: "/",
    },
    {
      name: "О компании",
      to: "/about",
    },
    {
      name: "Услуги",
      to: "",
    },
    {
      name: "Контакты",
      to: "",
    },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [open, setOpen] = useState(false);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(open);

  return (
    <div className={classNames("header")}>
      <div className="container">
        <div className={classNames("header__wrap")}>
          <img src={logoIcon} alt="Logo" />

          {windowWidth <= 768 ? (
            <>
              <Menu onOpen={() => setOpen(true)} isOpen={open} right>
                <div className="bm-item-links">
                  {renderLinks.map((el) => (
                    <Link onClick={() => setOpen(false)} to={el.to}>
                      {el.name}
                    </Link>
                  ))}
                </div>

                <div className={classNames("header__right-add-btn")}>
                  <button onClick={() => setOpen(false)}>
                    <span>
                      <PlusOutlined />
                    </span>
                    <Link to={"/ads"}>Добавить объявление</Link>
                  </button>
                </div>

                <div className="bm-item-info">
                  <LocalPhoneIcon
                    className={classNames("header__phone-icon")}
                  />

                  <div className={classNames("header__right-phone")}>
                    <span>+996 507 688 388</span>
                  </div>
                </div>
              </Menu>

              <div className={classNames("header__right")}>
                <FavoriteIcon className={classNames("header__favorite-icon")} />
              </div>
            </>
          ) : (
            <>
              <ul>
                {renderLinks.map((el) => (
                  <Link className={classNames("header__links")} to={el.to}>
                    {el.name}
                  </Link>
                ))}
              </ul>
              <div className={classNames("header__right")}>
                <FavoriteIcon className={classNames("header__favorite-icon")} />

                <LocalPhoneIcon className={classNames("header__phone-icon")} />

                <div className={classNames("header__right-phone")}>
                  <span>+996 507 688 388</span>
                </div>
                <div className={classNames("header__right-add-btn")}>
                  {windowWidth <= 992 ? (
                    <button>
                      <Link to={"/ads"}>
                        <PlusOutlined />
                      </Link>
                    </button>
                  ) : (
                    <button>
                      <span>
                        <PlusOutlined />
                      </span>
                      <Link to={"/ads"}>Добавить объявление</Link>
                    </button>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
