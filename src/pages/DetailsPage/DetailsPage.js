import React, { useEffect } from "react";
import cls from "./DetailsPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { CARD_DETAIL_GET_ASYNC } from "../../app/providers/Redux/actions/actions";
import { SwiperImage } from "../../widgets";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { detail, detailId } = useSelector((state) => state.details);

  const dispatch = useDispatch();

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    dispatch(CARD_DETAIL_GET_ASYNC(id));
  }, [dispatch, id]);

  const imagesList = [];

  detail.Upload?.map((image) => imagesList.push(image.thumbUrl));

  const renderDistricts = detail.Districts?.map((item) => item);

  const renderCommunication = detail.communication?.map((item) => item);

  return (
    <div className={cls.detail}>
      <div className="container">
        <h1>{`${detail.Rooms} ком, ${detail.PloshadM2}м2, этаж ${detail.Floor}/${detail.TotalFloor}, Сост: ${detail.Sostoyanie}`}</h1>
        <SwiperImage images={imagesList} />
        <p>{`ID объекта: ${detail._id}`}</p>
        <p>{`Цена: ${detail.PriceForm}`}</p>
        <p>{`Тип: ${detail.TipNedvishki}`}</p>
        <p>{`Размер объекта: ${detail.PloshadM2}`}</p>
        <p>{`Состояние: ${detail.Sostoyanie}`}</p>
        <p>{`Район: ${renderDistricts}`}</p>
        <p>{`Этаж: ${detail.Floor}/${detail.TotalFloor}`}</p>
        <p>{`Комнат: ${detail.Rooms}`}</p>
        <p>{`Коммуникации: ${renderCommunication}`}</p>
        <p>{`Описание: ${detail.Texteditor}`}</p>
      </div>
    </div>
  );
};

export default DetailsPage;
