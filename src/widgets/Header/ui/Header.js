import React, { useEffect, useState } from "react";
import logoIcon from "../../../shared/assets/svg/logo.svg";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { UserOutlined } from "@ant-design/icons";
import { toast, ToastContainer } from "react-toastify";
import { Avatar, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  DELETE_IMAGE_PROFILE,
  GET_PROFILE,
  UPDATE_IMAGE_PROFILE,
} from "../../../app/providers/Redux/actions/actions";
import { MyLoader } from "../../../shared/ui";
import ImageUploadAndCrop from "../../ImageUploadAndCrop/ImageUploadAndCrop";
import { renderLinks } from "../../../shared/helpers";
import { HeaderMenu } from "../../../features/ui";
import HeaderNav from "../../../features/ui/Header/HeaderNav/HeaderNav";

const Header = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const { profile, loading, delete_loading } = useSelector(
    (state) => state.profile
  );

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [avatarModalOpen, setAvatarModalOpen] = useState(false);

  useEffect(() => {
    dispatch(GET_PROFILE());
  }, [dispatch, profile.image]);

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

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const notifyCheckToken = (title) =>
    toast.info(title, { containerId: "check-token" });

  const handleImageUpload = (blob) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => {
      dispatch(UPDATE_IMAGE_PROFILE(reader.result));
    };
  };

  const handleDeleteImageProfile = () => {
    dispatch(DELETE_IMAGE_PROFILE());
  };

  return (
    <>
      {loading && <MyLoader />}
      <ToastContainer
        enableMultiContainer
        containerId={"delete-image-profile"}
      />
      <div className={styles.header}>
        <div className="container">
          <div className={styles.header__wrap}>
            <img className={styles["header-logo"]} src={logoIcon} alt="Logo" />
            {windowWidth <= 768 ? (
              <>
                <HeaderMenu
                  setState={setOpen}
                  state={open}
                  notifyFunction={notifyCheckToken}
                />
                <Modal
                  title="Ваш профиль"
                  width="100%"
                  open={modalOpen}
                  onOk={() => setModalOpen(false)}
                  onCancel={() => setModalOpen(false)}
                  centered
                >
                  <div className={styles["header-modal-wrapper"]}>
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
                    <p className={styles["header-modal-username"]}>
                      {profile.name}
                    </p>
                    <p className={styles["header-modal-email"]}>
                      {profile.email}
                    </p>
                    <p
                      className={
                        profile.verified === false
                          ? styles["header-modal-verified"]
                          : styles["header-modal-unverified"]
                      }
                    >
                      {profile.verified === false
                        ? "Неверифицированный"
                        : "Верифицированный"}
                    </p>
                  </div>
                </Modal>
                <ImageUploadAndCrop
                  visible={avatarModalOpen}
                  onClose={() => setAvatarModalOpen(false)}
                  onUpload={handleImageUpload}
                  handleDeleteImageProfile={handleDeleteImageProfile}
                  delete_loading={delete_loading}
                />
                <div className={styles["header__right"]}>
                  <FavoriteIcon className={styles["header__favorite-icon"]} />
                </div>
              </>
            ) : (
              <>
                <HeaderNav
                  notifyFunction={notifyCheckToken}
                  avatarModalOpen={avatarModalOpen}
                  handleImageUpload={handleImageUpload}
                  handleDeleteImageProfile={handleDeleteImageProfile}
                  delete_loading={delete_loading}
                  setOpen={setOpen}
                  setModalOpen={setModalOpen}
                  modalOpen={modalOpen}
                  setAvatarModalOpen={setAvatarModalOpen}
                  token={token}
                  windowWidth={windowWidth}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
