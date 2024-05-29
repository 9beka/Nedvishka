import React from "react";
import cls from "./HeaderNav.module.scss";
import { renderLinks } from "../../../../shared/helpers";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { PlusOutlined, UserOutlined } from "@ant-design/icons";
import { AntdTooltip } from "../../../../shared/ui";
import { Avatar, Modal } from "antd";
import { ImageUploadAndCrop } from "../../../../widgets";
import { useSelector } from "react-redux";
import { LogOutBtn } from "../../../../shared/ui/Button";

const HeaderNav = ({
  avatarModalOpen,
  handleImageUpload,
  handleDeleteImageProfile,
  delete_loading,
  setOpen,
  setModalOpen,
  modalOpen,
  setAvatarModalOpen,
  notifyFunction,
  token,
  windowWidth,
}) => {
  const { profile } = useSelector((state) => state.profile);

  const renderItems = renderLinks.map((el) => (
    <Link
      key={el.name}
      className={cls["header__links"]}
      onClick={() => {
        if (el.name === "О компании") {
          setOpen(false);
          notifyFunction(
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
  ));

  return (
    <>
      <ul>{renderItems}</ul>
      <div className={cls["header__right"]}>
        <Link to={"/favorite"}>
          <FavoriteIcon
            style={{ cursor: "pointer" }}
            className={cls["header__favorite-icon"]}
          />
        </Link>
        <LocalPhoneIcon className={cls["header__phone-icon"]} />
        <div className={cls["header__right-phone"]}>
          <span>+996 507 688 388</span>
        </div>
        <div className={cls["header__right-add-btn"]}>
          {windowWidth <= 992 ? (
            <button
              className={cls["header__btn"]}
              onClick={() => {
                notifyFunction(
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
          ) : (
            <button
              className={cls["header__btn"]}
              onClick={() => {
                notifyFunction(
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
          )}
        </div>
        <AntdTooltip
          placement="topRight"
          title="Нажмите, чтобы изменить фото профиля"
        >
          <Avatar
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => setModalOpen(true)}
            size={70}
            src={profile.image}
            icon={!profile.imageUrl && <UserOutlined />}
          />
        </AntdTooltip>

        <Modal
          title="Ваш профиль"
          width="20%"
          style={{ bottom: "20%", right: "-30%" }}
          open={modalOpen}
          onCancel={() => setModalOpen(false)}
          footer={null}
        >
          <div className={cls["header-modal-wrapper"]}>
            <AntdTooltip
              placement="topLeft"
              title="Нажмите, чтобы изменить фото профиля"
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
            </AntdTooltip>
            <p className={cls["header-modal-username"]}>{profile.name}</p>
            <p className={cls["header-modal-email"]}>{profile.email}</p>
            <p
              className={
                profile.verified === false
                  ? cls["header-modal-verified"]
                  : cls["header-modal-unverified"]
              }
            >
              {profile.verified === false
                ? "Неверифицированный"
                : "Верифицированный"}
            </p>
            <LogOutBtn />
          </div>
        </Modal>
        <ImageUploadAndCrop
          visible={avatarModalOpen}
          onClose={() => setAvatarModalOpen(false)}
          onUpload={handleImageUpload}
          handleDeleteImageProfile={handleDeleteImageProfile}
          delete_loading={delete_loading}
        />
      </div>
    </>
  );
};

export default HeaderNav;
