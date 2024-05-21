import React, { useEffect, useState } from "react";
import logoIcon from "../../../shared/assets/svg/logo.svg";
import "./Header.scss";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { classNames } from "../../../shared/helpers";
import { slide as Menu } from "react-burger-menu";
import { PlusOutlined, UserOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { Avatar, Modal, Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { GET_PROFILE } from "../../../app/providers/Redux/actions/actions";
import UploadComponent from "../../../shared/ui/Upload/UploadComponent";

const Header = () => {
  const token = localStorage.getItem("token");

  const [fileList, setFileList] = useState([]);

  const dispatch = useDispatch();

  const { profile } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(GET_PROFILE());
  }, [dispatch]);

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
      name: "Мои объявления",
      to: "/myAds",
    },
    {
      name: "Контакты",
      to: "",
    },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [open, setOpen] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [avatarModalOpen, setAvatarModalOpen] = useState(false);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const bmButton = document.querySelector(".bm-cross-button");

  bmButton?.addEventListener("click", () => {
    setOpen(false);
  });

  const notifyCheckToken = (title) =>
    toast.info(title, { containerId: "check-token" });

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
                    <Link
                      key={el.name}
                      onClick={() => {
                        if (el.name === "О компании") {
                          setOpen(false);
                          notifyCheckToken(
                            "Пожалуйства зарегистрируйтесь, чтобы посмотреть вкладку 'О компании'!"
                          );
                        } else {
                          setOpen(false);
                        }
                      }}
                      to={el.to}
                    >
                      {el.name}
                    </Link>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Avatar
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setOpen(false);
                      setModalOpen(true);
                    }}
                    size={100}
                    icon={<UserOutlined />}
                  />
                </div>
                <div className={classNames("header__right-add-btn")}>
                  <button
                    className={classNames("header__btn")}
                    onClick={() => {
                      setOpen(false);
                      notifyCheckToken(
                        "Пожалуйста зарегистрируйтесь, чтобы добавить объявление!"
                      );
                    }}
                  >
                    <span>
                      <PlusOutlined />
                    </span>
                    <Link to={`${token ? "/ads" : "/register"}`}>
                      Добавить объявление
                    </Link>
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

              <Modal
                title="Ваш профиль"
                width="100%"
                open={modalOpen}
                onOk={() => setModalOpen(false)}
                onCancel={() => setModalOpen(false)}
                centered
              >
                <div className="header-modal-wrapper">
                  <Avatar
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onClick={() => {
                      setAvatarModalOpen(true);
                      setModalOpen(false);
                    }}
                    size={70}
                    icon={<UserOutlined />}
                  />
                  <p className="header-modal-username">{profile.name}</p>
                  <p className="header-modal-email">{profile.email}</p>
                  <p
                    className={
                      profile.verified === false
                        ? "header-modal-verified"
                        : "header-modal-unverified "
                    }
                  >
                    {profile.verified === false
                      ? "Неверифицированный"
                      : "Верифицированный "}
                  </p>
                </div>
              </Modal>
              <Modal
                title="Измените фото профиля"
                width="100%"
                open={avatarModalOpen}
                onOk={() => setAvatarModalOpen(false)}
                onCancel={() => setAvatarModalOpen(false)}
                centered
              >
                <UploadComponent
                  handleValueUpload={() => null}
                  fileList={fileList}
                  setFileList={setFileList}
                  maxFiles={1}
                />
              </Modal>

              <div className={classNames("header__right")}>
                <FavoriteIcon className={classNames("header__favorite-icon")} />
              </div>
            </>
          ) : (
            <>
              <ul>
                {renderLinks.map((el) => (
                  <Link
                    key={el.name}
                    className={classNames("header__links")}
                    onClick={() => {
                      if (el.name === "О компании") {
                        setOpen(false);
                        notifyCheckToken(
                          "Пожалуйства зарегистрируйтесь, чтобы посмотреть вкладку 'О компании'!"
                        );
                      } else {
                        setOpen(false);
                      }
                    }}
                    to={el.to}
                  >
                    {el.name}
                  </Link>
                ))}
              </ul>
              <div className={classNames("header__right")}>
                <Link to={"/favoties"}>
                  <FavoriteIcon
                    style={{
                      cursor: "pointer",
                    }}
                    className={classNames("header__favorite-icon")}
                  />
                </Link>

                <LocalPhoneIcon className={classNames("header__phone-icon")} />

                <div className={classNames("header__right-phone")}>
                  <span>+996 507 688 388</span>
                </div>
                <div className={classNames("header__right-add-btn")}>
                  {windowWidth <= 992 ? (
                    <button
                      className={classNames("header__btn")}
                      onClick={() =>
                        notifyCheckToken(
                          "Пожалуйста зарегистрируйтесь, чтобы добавить объявление!"
                        )
                      }
                    >
                      <Link to={`${token ? "/ads" : "/register"}`}>
                        <PlusOutlined />
                      </Link>
                    </button>
                  ) : (
                    <button
                      className={classNames("header__btn")}
                      onClick={() =>
                        notifyCheckToken(
                          "Пожалуйста зарегистрируйтесь, чтобы добавить объявление!"
                        )
                      }
                    >
                      <span>
                        <PlusOutlined />
                      </span>
                      <Link to={`${token ? "/ads" : "/register"}`}>
                        Добавить объявление
                      </Link>
                    </button>
                  )}
                </div>
              </div>
              <div>
                <Avatar
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => setModalOpen(true)}
                  size="large"
                  icon={<UserOutlined />}
                />
              </div>
              <Modal
                title="Ваш профиль"
                style={{
                  bottom: "20%",
                  right: "-30%",
                }}
                width="20%"
                open={modalOpen}
                onOk={() => setModalOpen(false)}
                onCancel={() => setModalOpen(false)}
              >
                <div className="header-modal-wrapper">
                  <Tooltip
                    placement="topLeft"
                    title="Нажмите, чтобы измерить фото профиля"
                  >
                    <Avatar
                      style={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      onClick={() => {
                        setAvatarModalOpen(true);
                        setModalOpen(false);
                      }}
                      size={70}
                      icon={<UserOutlined />}
                    />
                  </Tooltip>
                  <p className="header-modal-username">{profile.name}</p>
                  <p className="header-modal-email">{profile.email}</p>
                  <p
                    className={
                      profile.verified === false
                        ? "header-modal-verified"
                        : "header-modal-unverified "
                    }
                  >
                    {profile.verified === false
                      ? "Неверифицированный"
                      : "Верифицированный "}
                  </p>
                </div>
              </Modal>
              <Modal
                title="Измените фото профиля"
                width="30%"
                open={avatarModalOpen}
                onOk={() => setAvatarModalOpen(false)}
                onCancel={() => setAvatarModalOpen(false)}
                centered
              >
                <UploadComponent
                  handleValueUpload={() => null}
                  fileList={fileList}
                  setFileList={setFileList}
                  maxFiles={1}
                />
              </Modal>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
