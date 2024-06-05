import React from "react";
import cls from "./AllAdsCard.module.scss";
import { Avatar } from "antd";
import {
  WhatsAppOutlined,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { SwiperImage } from "../../../widgets/index";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_FAVORITE_ASYNC,
  CARD_DETAIL_GET_ASYNC,
} from "../../../app/providers/Redux/actions/actions";
import { useNavigate } from "react-router-dom";
import { ADD_DETAILID } from "../../../app/providers/Redux/Slices/detailsSlicer";

const AllAdsCard = ({ item, converter }) => {
  const dispatch = useDispatch();

  const { favorite } = useSelector((state) => state.favorite);
  const { myAdsCart } = useSelector((state) => state.ads);

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
  const digitsID = _id.replace(/\D/g, "");
  const toUsd = PriceForm / converter.sell_usd;
  const imagesList = [];
  const { profile } = useSelector((state) => state.profile);
  Upload?.map((image) => imagesList.push(image.thumbUrl));

  const isTrueNumber = myAdsCart.items?.filter((el) => el._id === _id);

  const handleAddFavorite = () => {
    dispatch(ADD_FAVORITE_ASYNC(_id));
  };

  const isLiked = favorite?.some((item) => item._id === _id);
  const navigate = useNavigate();

  const handleId = () => {
    dispatch(ADD_DETAILID(_id));
    dispatch(CARD_DETAIL_GET_ASYNC(_id));
    navigate(`/details/${_id}`);
  };
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
      <p
        style={{
          fontSize: 14,
        }}
      >
        {digitsID}
      </p>
      <div className={cls.footer__slide}>
        <Avatar
          size={70}
          src={createdBy?.image}
          icon={!createdBy?.imageUrl && <UserOutlined />}
        />
        <p className={cls.phone__p}>
          +{isTrueNumber ? profile.telephoneNumber : TelNumber}
        </p>
      </div>
      <div className={cls.footer__slide}>
        <Link to={"https://wa.me/+996507688388"}>
          {" "}
          <WhatsAppOutlined />
        </Link>
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
