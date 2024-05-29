import React from "react";
import cls from "./HeaderMenu.module.scss";
import { slide as Menu } from "react-burger-menu";
import { renderLinks } from "../../../../shared/helpers";
import { Link } from "react-router-dom";
import { Avatar } from "antd";
import { UserOutlined, PlusOutlined } from "@ant-design/icons";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { useSelector } from "react-redux";
import HiddenByTokenHoc from "../../../../shared/helpers/hoc/HiddenByTokenHoc";

const HeaderMenu = ({
  setOpenModal,
  setState,
  state,
  notifyFunction,
  token,
}) => {
  const { profile } = useSelector((state) => state.profile);

  const renderItems = renderLinks.map((el) => (
    <Link
      key={el.name}
      onClick={() => {
        if (el.name === "О компании") {
          setState(false);
          notifyFunction(
            "Пожалуйства зарегистрируйтесь, чтобы посмотреть вкладку 'О компании'!"
          );
        } else {
          setState(false);
        }
      }}
      to={el.to}
    >
      {el.name}
    </Link>
  ));

  const handleOpenMenu = () => {
    setState(true);
  };

  return (
    <Menu onOpen={handleOpenMenu} isOpen={state} right>
      <div className="bm-item-links">{renderItems}</div>

      <HiddenByTokenHoc>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Avatar
            style={{ cursor: "pointer" }}
            onClick={() => {
              setState(false);
              notifyFunction(true);
              setOpenModal(true);
            }}
            size={100}
            src={profile.image}
            icon={!profile.imageUrl && <UserOutlined />}
          />
        </div>

        <div className={cls["header__right-add-btn"]}>
          <div className={cls["header__btn__wrap"]}>
            <button
              className={cls["header__btn"]}
              onClick={() => {
                setState(false);
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
          </div>
        </div>
      </HiddenByTokenHoc>

      <div className="bm-item-info">
        <LocalPhoneIcon className={cls["header__phone-icon"]} />

        <div className={cls["header__right-phone"]}>
          <span>+996 507 688 388</span>
        </div>
      </div>
    </Menu>
  );
};

export default HeaderMenu;
