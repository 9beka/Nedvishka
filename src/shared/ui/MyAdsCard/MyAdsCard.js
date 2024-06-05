import React from "react";
import cls from "./MyAdsCard.module.scss";
import { Button, Avatar } from "antd";
import {
  DeleteFilled,
  WhatsAppOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { ADS_DELETE_ASYNC } from "../../../app/providers/Redux/actions/actions";
import { SwiperImage } from "../../../widgets/index";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

function MyAdsCard({ item, userId, converter }) {
  const { product, _id } = item;
  const navigate = useNavigate();
  const {
    Districts,
    Floor,
    PloshadM2,
    PriceForm,
    Sostoyanie,
    TelNumber,
    TipNedvishki,
    TotalFloor,
    Upload,
    Rooms,
    createdBy,
  } = product || item;

  const dispatch = useDispatch();

  const handleDeleteBtn = () => {
    dispatch(
      ADS_DELETE_ASYNC({ id: _id, userId: userId, card_Id: product._id })
    );
  };

  const handleId = () => {
    navigate(`/details/${_id}`);
  };

  const toUsd = PriceForm / converter.sell_usd;
  const imagesList = [];

  Upload?.map((image) => imagesList.push(image.thumbUrl));

  return (
    <div className={cls["card"]} onDoubleClick={handleId}>
      <div className={cls["myAdsCard-image-wrapper"]}>
        <SwiperImage images={imagesList} />
      </div>
      <p
        className={cls.apartment__p}
      >{`${TipNedvishki}, ${Rooms} ком, ${PloshadM2} м2, этаж ${Floor} / ${TotalFloor}, Сост: ${Sostoyanie}`}</p>
      <p className={cls.geo__p}>{Districts?.map((dist) => `${dist}, `)}</p>
      <p className={cls.price__p}>{`$${toUsd.toFixed(
        2
      )} / ${PriceForm?.toLocaleString("ru-RU")} сом`}</p>
      <div className={cls.footer__slide}>
        <Avatar
          size={70}
          src={createdBy?.image}
          icon={!createdBy?.imageUrl && <UserOutlined />}
        />
        <p className={cls.phone__p}>+{TelNumber}</p>
      </div>
      <div className={cls.footer__slide}>
        <WhatsAppOutlined />
        <ShareAltOutlined />
      </div>
      <div className={cls["myAdsCard-buttons"]}>
        <Button
          onClick={handleDeleteBtn}
          type="primary"
          icon={<DeleteFilled />}
          danger
        />
      </div>
    </div>
  );
}

export default MyAdsCard;
