import React, { useEffect, useLayoutEffect } from "react";
import cls from "./Sell.module.scss";
import { Button, MyAdsCard } from "../../../shared/ui";
import { renderApiSlides } from "../../../shared/constants";
import {
  HeartOutlined,
  ShareAltOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSelector ,useDispatch } from "react-redux";
import { ADS_GET_CARTS_ASYNC, GET_CONVERTER } from "../../../app/providers/Redux/actions/actions";

const Sell = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(ADS_GET_CARTS_ASYNC())
    dispatch(GET_CONVERTER())
  },[dispatch])
  const {dataOfAds,converter} = useSelector(state=>state.ads)

console.log(converter);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.fromTo(".button-gsap", { opacity: 0, x: -500 }, { opacity: 1, x: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".card-gsap",
        start: "top 90%",
        end: "bottom 100%",
      },
    });

    tl.from(".card-gsap", {
      opacity: 0,
      y: 50,
    }).to(".card-gsap", {
      opacity: 1,
      y: 0,
    });
  });

  return (
    <div className={cls.sell__block}>
      <div className="wrapper">
        <h1 className={`${cls.sell__p} title`}>Срочная продажа</h1>
        <div className={cls.sell__wrapper}>
          {dataOfAds.map((item) => (
           <MyAdsCard converter={converter} item={item}/>
          ))}
        </div>

        <div className={`${cls.btn__wrap} button-gsap`}>
          <Button text="Посмотреть все" style="viewAll" />
        </div>
      </div>
    </div>
  );
};

export default Sell;
