import React from "react";
import styles from "../Header.module.scss";
import { Avatar, Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";
import ImageUploadAndCrop from "../../../ImageUploadAndCrop/ImageUploadAndCrop";
import { useSelector } from "react-redux";
import { LogOutBtn } from "../../../../shared/ui/Button";

const HeaderLogo = ({
  setModalOpen,
  setAvatarModalOpen,
  avatarModalOpen,
  modalOpen,
  handleDeleteImageProfile,
  handleImageUpload,
}) => {
  const { profile, delete_loading } = useSelector((state) => state.profile);
  return (
    <>
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
          <p className={styles["header-modal-username"]}>{profile.name}</p>
          <p className={styles["header-modal-email"]}>{profile.email}</p>
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
          <LogOutBtn/>
        </div>
      </Modal>
      <ImageUploadAndCrop
        visible={avatarModalOpen}
        onClose={() => setAvatarModalOpen(false)}
        onUpload={handleImageUpload}
        handleDeleteImageProfile={handleDeleteImageProfile}
        delete_loading={delete_loading}
      />
    </>
  );
};

export default HeaderLogo;
