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
import { Avatar, Modal, Tooltip, Upload, Image, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  DELETE_IMAGE_PROFILE,
  GET_PROFILE,
  UPDATE_IMAGE_PROFILE,
} from "../../../app/providers/Redux/actions/actions";
import { MyLoader } from "../../../shared/ui";
import { ToastContainer } from "react-toastify";

const Header = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList.slice(-1));
  };

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  const { profile, loading, delete_loading } = useSelector(
    (state) => state.profile
  );

  const handleDeleteImageProfile = () => {
    dispatch(DELETE_IMAGE_PROFILE());
    if (!loading && profile.image) {
      setFileList([]);
      setAvatarModalOpen(false);
      notifyDeleteImageProfile("Вы успешно удалили фото профиля!", "success");
    } else {
      notifyDeleteImageProfile(
        "У вас нету фото профиля, поэтому Вы не можете удалить его",
        "info"
      );
    }
  };

  useEffect(() => {
    dispatch(GET_PROFILE());
  }, [dispatch, profile.image]);

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

  const notifyDeleteImageProfile = (title, type) =>
    toast[type](title, { containerId: "delete-image-profile" });

  return (
    <>
      {loading && <MyLoader />}
      <ToastContainer
        enableMultiContainer
        containerId={"delete-image-profile"}
      />

      <div className={classNames("header")}>
        <div className="container">
          <div className={classNames("header__wrap")}>
            <img className="header-logo" src={logoIcon} alt="Logo" />

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
                      src={profile.image}
                      icon={!profile.imageUrl && <UserOutlined />}
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
                      src={profile.image}
                      icon={!profile.imageUrl && <UserOutlined />}
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
                  onOk={() => {
                    dispatch(UPDATE_IMAGE_PROFILE(fileList[0].thumbUrl));
                    setAvatarModalOpen(false);
                    setFileList([]);
                  }}
                  onCancel={() => setAvatarModalOpen(false)}
                  centered
                >
                  <Upload
                    action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                    listType="picture-circle"
                    fileList={fileList}
                    maxCount={1}
                    onPreview={handlePreview}
                    onChange={handleChange}
                  >
                    {fileList.length >= 1 ? null : uploadButton}
                  </Upload>
                  <Button
                    type="primary"
                    danger
                    loading={delete_loading}
                    onClick={handleDeleteImageProfile}
                  >
                    Удалить фото профиля
                  </Button>
                  {previewImage && (
                    <Image
                      wrapperStyle={{ display: "none" }}
                      preview={{
                        visible: previewOpen,
                        onVisibleChange: (visible) => setPreviewOpen(visible),
                        afterOpenChange: (visible) =>
                          !visible && setPreviewImage(""),
                      }}
                      src={previewImage}
                    />
                  )}
                </Modal>

                <div className={classNames("header__right")}>
                  <FavoriteIcon
                    className={classNames("header__favorite-icon")}
                  />
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

                  <LocalPhoneIcon
                    className={classNames("header__phone-icon")}
                  />

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
                    size={60}
                    src={profile.image}
                    icon={!profile.imageUrl && <UserOutlined />}
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
                  onCancel={() => setModalOpen(false)}
                  footer={null}
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
                        src={profile.image}
                        icon={!profile.imageUrl && <UserOutlined />}
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
                  onOk={() => {
                    dispatch(UPDATE_IMAGE_PROFILE(fileList[0].thumbUrl));
                    setAvatarModalOpen(false);
                    setFileList([]);
                  }}
                  onCancel={() => setAvatarModalOpen(false)}
                  centered
                >
                  <Upload
                    action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                    listType="picture-circle"
                    fileList={fileList}
                    maxCount={1}
                    onPreview={handlePreview}
                    onChange={handleChange}
                  >
                    {fileList.length >= 1 ? null : uploadButton}
                  </Upload>
                  <Button
                    type="primary"
                    danger
                    loading={delete_loading}
                    onClick={handleDeleteImageProfile}
                  >
                    Удалить фото профиля
                  </Button>
                  {previewImage && (
                    <Image
                      wrapperStyle={{ display: "none" }}
                      preview={{
                        visible: previewOpen,
                        onVisibleChange: (visible) => setPreviewOpen(visible),
                        afterOpenChange: (visible) =>
                          !visible && setPreviewImage(""),
                      }}
                      src={previewImage}
                    />
                  )}
                </Modal>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
