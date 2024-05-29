import React from "react";
import cls from "./AllAdsCard.module.scss";
import { Avatar, Spin } from "antd";
import {
  WhatsAppOutlined,
  ShareAltOutlined,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { SwiperImage } from "../../../widgets/index";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADD_FAVORITE_ASYNC } from "../../../app/providers/Redux/actions/actions";

const AllAdsCard = ({ item, converter }) => {
  const dispatch = useDispatch();

  const { favorite, loading } = useSelector((state) => state.favorite);

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
    _id,
  } = item;

  const toUsd = PriceForm / converter.sell_usd;
  const imagesList = [];

  Upload?.map((image) => imagesList.push(image.thumbUrl));

  const handleAddFavorite = () => {
    dispatch(ADD_FAVORITE_ASYNC(_id));
  };

  const isLiked = favorite?.some((item) => item._id === _id);

  console.log(isLiked);

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
      <p
        style={{
          fontSize: 14,
        }}
      >
        {_id}
      </p>
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
        {isLiked ? (
          <HeartFilled onClick={handleAddFavorite} />
        ) : (
          <HeartOutlined onClick={handleAddFavorite} />
        )}
      </div>
    </div>
  );
};

export default AllAdsCard;
