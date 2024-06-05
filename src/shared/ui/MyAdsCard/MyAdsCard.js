import React, { useMemo, useCallback } from "react";
import cls from "./MyAdsCard.module.scss";
import { Button, Avatar } from "antd";
import { DeleteFilled, WhatsAppOutlined, ShareAltOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import {ADS_DELETE_ASYNC, CARD_DETAIL_GET_ASYNC} from "../../../app/providers/Redux/actions/actions";
import { SwiperImage } from "../../../widgets/index";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import {ADD_DETAILID} from "../../../app/providers/Redux/Slices/detailsSlicer";

function MyAdsCard({ item, userId, converter }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteBtn = useCallback(() => {
    dispatch(ADS_DELETE_ASYNC({ id: item._id, userId, card_Id: item.product._id }));
  }, [dispatch, item._id, userId, item.product._id]);

    const handleId = useCallback(() => {
        dispatch(ADD_DETAILID(item.product._id));
        dispatch(CARD_DETAIL_GET_ASYNC(item.product._id));
        navigate(`/details/${item.product._id}`);
    }, [dispatch, navigate, item.product._id]);

  const toUsd = useMemo(() => item.product.PriceForm / converter.sell_usd, [item.product.PriceForm, converter.sell_usd]);
  const imagesList = useMemo(() => item.product.Upload?.map(image => image.thumbUrl) || [], [item.product.Upload]);

    console.log(item)

  return (
      <div className={cls["card"]} onDoubleClick={handleId}>
        <div className={cls["myAdsCard-image-wrapper"]}>
          <SwiperImage images={imagesList} />
        </div>
        <p className={cls.apartment__p}>{`${item.product.TipNedvishki}, ${item.product.Rooms} ком, ${item.product.PloshadM2} м2, этаж ${item.product.Floor} / ${item.product.TotalFloor}, Сост: ${item.product.Sostoyanie}`}</p>
        <p className={cls.geo__p}>{item.product.Districts?.join(", ")}</p>
        <p className={cls.price__p}>{`$${toUsd.toFixed(2)} / ${item.product.PriceForm} сом`}</p>
        <div className={cls.footer__slide}>
          <Avatar size={70} src={item.product.createdBy?.image} icon={!item.product.createdBy?.imageUrl && <UserOutlined />} />
          <p className={cls.phone__p}>+{item.product.TelNumber}</p>
        </div>
        <div className={cls.footer__slide}>
          <WhatsAppOutlined />
          <ShareAltOutlined />
        </div>
        <div className={cls["myAdsCard-buttons"]}>
          <Button onClick={handleDeleteBtn} type="primary" icon={<DeleteFilled />} danger />
        </div>
      </div>
  );
}

export default React.memo(MyAdsCard);
