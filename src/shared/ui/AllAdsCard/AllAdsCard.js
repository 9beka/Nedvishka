import React from "react";
import cls from "./AllAdsCard.module.scss";
import { Avatar } from "antd";
import {
  WhatsAppOutlined,
  ShareAltOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { SwiperImage } from "../../../widgets/index";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const AllAdsCard = ({ item, converter }) => {
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
  } = item;

  const toUsd = PriceForm / converter.sell_usd;
  const imagesList = [];

  Upload?.map((image) => imagesList.push(image.thumbUrl));

  return (
    <div className={cls["card"]}>
      <div className={cls["myAdsCard-image-wrapper"]}>
        <SwiperImage images={imagesList} />
      </div>
      <p
        className={cls.apartment__p}
      >{`${TipNedvishki}, ${Rooms} ком, ${PloshadM2} м2, этаж ${Floor} / ${TotalFloor}, Сост: ${Sostoyanie}`}</p>
      <p className={cls.geo__p}>{Districts?.map((dist) => `${dist}, `)}</p>
      <p className={cls.price__p}>{`$${toUsd.toFixed(
        2
      )} / ${PriceForm} сом`}</p>
      <div className={cls.footer__slide}>
        <Avatar
          size={70}
          src={createdBy?.image}
          icon={!createdBy?.imageUrl && <UserOutlined />}
        />
        <p className={cls.phone__p}>+{TelNumber}</p>
      </div>
      <div className={cls.footer__slide}>
       <Link to={"https://wa.me/+996507688388"}> <WhatsAppOutlined /></Link>
        <ShareAltOutlined />
        <HeartOutlined />
      </div>
    </div>
  );
};

export default AllAdsCard;
