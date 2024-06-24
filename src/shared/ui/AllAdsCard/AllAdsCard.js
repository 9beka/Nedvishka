import React, { useCallback,  useMemo } from "react";
import cls from "./AllAdsCard.module.scss";
import { Avatar } from "antd";
import { WhatsAppOutlined, HeartOutlined, HeartFilled, UserOutlined } from "@ant-design/icons";
import { SwiperImage } from "../../../widgets/index";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADD_FAVORITE_ASYNC,  CARD_DETAIL_GET_ASYNC } from "../../../app/providers/Redux/actions/actions";
import { ADD_DETAILID } from "../../../app/providers/Redux/Slices/detailsSlicer";

const AllAdsCard = ({ item, converter }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { favorite } = useSelector((state) => state.favorite);
    const { myAdsCart} = useSelector((state) => state.ads);
    const { profile } = useSelector((state) => state.profile);
    const {
        Districts, Floor, PloshadM2, PriceForm, Sostoyanie, TelNumber, TipNedvishki,
        TotalFloor, Upload, Rooms, createdBy, _id,createdAt
    } = item;
        console.log(item)
    const formatDate = (date) => {
        return new Date(date).toLocaleString("ky-KG", {
          year: 'numeric', 
          month: 'numeric', 
          day: 'numeric', 
          hour: '2-digit', 
          minute: '2-digit',
          hour12: false
        });
      };
    const getLastFiveDigits = (id) => id ? id.replace(/\D/g, "").slice(-5) : '';

    const digitsID = getLastFiveDigits(_id);
    const toUsd = useMemo(() => PriceForm / converter.sell_usd, [PriceForm, converter]);
    const imagesList = useMemo(() => Upload?.map(image => image.thumbUrl), [Upload]);

    const isTrueNumber = useMemo(() => myAdsCart?.items?.some(el => el.product._id === _id), [myAdsCart.items, _id]);
    console.log(myAdsCart?.items,_id );
    const isLiked = useMemo(() => favorite?.some(favItem => favItem._id === _id), [favorite, _id]);
    const handleAddFavorite = useCallback(() => {
        dispatch(ADD_FAVORITE_ASYNC(_id));
    }, [dispatch, _id]);

    const handleId = useCallback(() => {
        dispatch(ADD_DETAILID(_id));
        dispatch(CARD_DETAIL_GET_ASYNC(_id));
        navigate(`/details/${_id}`);
    }, [dispatch, navigate, _id]);

    return (
        <div className={cls["card"]} onDoubleClick={handleId}>
            <div className={cls["myAdsCard-image-wrapper"]}>
                <SwiperImage images={imagesList} />
            </div>
            <p className={cls.apartment__p}>{`${TipNedvishki}, ${Rooms} ком, ${PloshadM2} м2, этаж ${Floor} / ${TotalFloor}, Сост: ${Sostoyanie}`}</p>
            <p className={cls.geo__p}>{Districts?.map(dist => `${dist}, `)}</p>
            <p className={cls.price__p}>{`$${toUsd.toFixed(2)} / ${PriceForm} сом`}</p>
            <p style={{ fontSize: 14 }}>ID : {digitsID}</p>
            <div className={cls.footer__slide}>
                <Avatar size={70} src={createdBy?.image} icon={!createdBy?.imageUrl && <UserOutlined />} />
                <p className={cls.phone__p}>+{isTrueNumber ? profile.telephoneNumber : TelNumber}</p>
            </div>
            <div className={cls.footer__slide}>
                <Link target="_blank" to={"https://wa.me/+996507688388"}>
                    <WhatsAppOutlined />
                </Link>
                <p className={cls.date__p}>{formatDate(createdAt)}</p>
                {isLiked ? (
                    <HeartFilled onClick={handleAddFavorite} />
                ) : (
                    <HeartOutlined onClick={handleAddFavorite} />
                )}
            </div>
        </div>
    );
};

export default React.memo(AllAdsCard);
