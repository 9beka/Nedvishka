import React, { useEffect, useState, useCallback } from "react";
import cls from "./DetailsPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  CARD_DETAIL_GET_ASYNC,
  GET_CONVERTER,
} from "../../app/providers/Redux/actions/actions";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Image } from "antd";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const ArrowNext = ({ swiper }) => (
  <div className={cls["arrow-3"]} onClick={() => swiper.slideNext()}>
    <svg
      className={cls["arrow-3-icon"]}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <g
        fill="none"
        stroke="#337AB7"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeMiterlimit="10"
      >
        <circle
          className={cls["arrow-3-iconcircle"]}
          cx="16"
          cy="16"
          r="15.12"
        ></circle>
        <path
          className={cls["arrow-3-icon--arrow"]}
          d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"
        ></path>
      </g>
    </svg>
  </div>
);

const ArrowPrev = ({ swiper }) => (
  <div className={cls["arrow-4"]} onClick={() => swiper.slidePrev()}>
    <svg
      className={cls["arrow-4-icon"]}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <g
        fill="none"
        stroke="#337AB7"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeMiterlimit="10"
      >
        <circle
          className={cls["arrow-4-iconcircle"]}
          cx="16"
          cy="16"
          r="15.12"
        ></circle>
        <path
          className={cls["arrow-4-icon--arrow"]}
          d="M15.86 22.07L9.79 16l6.07-6.07M23.77 16H9.79"
        ></path>
      </g>
    </svg>
  </div>
);

const DetailsPage = () => {
  const { detail } = useSelector((state) => state.details);
  const { converter } = useSelector((state) => state.ads);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    dispatch(CARD_DETAIL_GET_ASYNC(id));
    dispatch(GET_CONVERTER());
  }, [dispatch, id]);

  const imagesList = detail.Upload?.map((image) => image.thumbUrl) || [];
  const renderDistricts =
    detail.Districts?.map((item) => item).join(", ") || "";
  const renderCommunication =
    detail.communication?.map((item) => item).join(", ") || "";

  const onSwiperInit = useCallback((swiperInstance) => {
    setSwiper(swiperInstance);
  }, []);

  return (
    <>
      <div className={cls.detail}>
        <div className="container">
          <div className={cls["detail-main"]}>
            <div className={cls["detail-title-wrap"]}>
              <h1 className={cls["detail-title"]}>
                {`${detail.Rooms} ком, ${detail.PloshadM2}м2, этаж ${detail.Floor}/${detail.TotalFloor}, Сост: ${detail.Sostoyanie}`}
              </h1>

              <h1 className={cls["detail-price"]}>{`$${Math.floor(
                converter.sell_usd * detail.PriceForm
              )}/${detail.PriceForm}сом`}</h1>
            </div>

            <div className={cls["detail-location-wrap"]}>
              <LocationOnIcon
                style={{
                  fontSize: "28px",
                }}
              />
              <h5>{renderDistricts}</h5>
              <h5>
                <strong>ID:</strong> {detail._id}
              </h5>
            </div>
            <div>
              <Swiper
                onSwiper={onSwiperInit}
                spaceBetween={50}
                slidesPerView={1}
                modules={[Navigation, Pagination]}
                navigation={{
                  nextEl: ".custom-next",
                  prevEl: ".custom-prev",
                }}
                pagination={{ clickable: true }}
                centeredSlides
                loop
                autoplay={{ delay: 3000 }}
              >
                {imagesList.map((image, index) => (
                  <SwiperSlide
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "var(--light-blue-color)",
                      padding: "40px",
                      borderRadius: "20px",
                    }}
                    key={index}
                  >
                    <Image
                      style={{ width: "100%", height: "500px" }}
                      src={image}
                      alt={`Slide ${index}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              {swiper && (
                <div className={cls["swiper-arrows-wrapper"]}>
                  <ArrowPrev swiper={swiper} />
                  <ArrowNext swiper={swiper} />
                </div>
              )}
            </div>
            <div className={cls["detail-info"]}>
              <p>
                <span className={cls["span-descr"]}>ID объекта:</span>
                <strong className={cls["strong-descr"]}>{detail._id}</strong>
              </p>
              <p>
                <span className={cls["span-descr"]}>Цена:</span>
                <strong className={cls["strong-descr"]}>
                  {detail.PriceForm}
                </strong>
              </p>
              <p>
                <span className={cls["span-descr"]}>Тип:</span>
                <strong className={cls["strong-descr"]}>
                  {detail.TipNedvishki}
                </strong>
              </p>
              <p>
                <span className={cls["span-descr"]}>Размер объекта:</span>
                <strong className={cls["strong-descr"]}>
                  {detail.PloshadM2}
                </strong>
              </p>
              <p>
                <span className={cls["span-descr"]}>Состояние:</span>
                <strong className={cls["strong-descr"]}>
                  {detail.Sostoyanie}
                </strong>
              </p>
              <p>
                <span className={cls["span-descr"]}>Район:</span>
                <strong className={cls["strong-descr"]}>
                  {renderDistricts}
                </strong>
              </p>
              <p>
                <span className={cls["span-descr"]}>Этаж:</span>
                <strong className={cls["strong-descr"]}>
                  {detail.Floor}/{detail.TotalFloor}
                </strong>
              </p>
              <p>
                <span className={cls["span-descr"]}>Комнат:</span>
                <strong className={cls["strong-descr"]}>{detail.Rooms}</strong>
              </p>
              <p>
                <span className={cls["span-descr"]}>Коммуникации:</span>
                <strong className={cls["strong-descr"]}>
                  {renderCommunication}
                </strong>
              </p>
              <p>
                <span className={cls["span-descr"]}>Коммуникации:</span>
                <strong className={cls["strong-descr"]}>
                  {detail.StreetAround}
                </strong>
              </p>
              <p>
                <span className={cls["span-descr"]}>Описание:</span>
                <strong className={cls["strong-descr"]}>
                  {detail.Texteditor}
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
