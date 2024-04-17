import React from "react";
import cls from "./SwiperJS.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Scrollbar,
  Keyboard,
  A11y,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Button } from "../../../shared/ui";

const SwiperJS = () => {
  const renderApiSlides = [
    {
      id: 12345,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvu-G6FOZu74ps1Z_PKw6Nri9nd-mEjVrQfdljgxjWYA&s",
      apartment: "Элитка, 2 ком, 67 м2, этаж 12/12, Сост: Евроремонт",
      geo: "Филармония, Уметалиева-Фрунзе",
      price: "$73 500 / 6 594 420сом",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxh3AaVIDSy-NJG-UTcSURNp_GgeVniwH1e6UL7bbNpQ&s",
      phone: "+996555555555",
    },
    {
      id: 12345,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvu-G6FOZu74ps1Z_PKw6Nri9nd-mEjVrQfdljgxjWYA&s",
      apartment: "Элитка, 2 ком, 67 м2, этаж 12/12, Сост: Евроремонт",
      geo: "Филармония, Уметалиева-Фрунзе",
      price: "$73 500 / 6 594 420сом",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxh3AaVIDSy-NJG-UTcSURNp_GgeVniwH1e6UL7bbNpQ&s",
      phone: "+996555555555",
    },
    {
      id: 12345,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvu-G6FOZu74ps1Z_PKw6Nri9nd-mEjVrQfdljgxjWYA&s",
      apartment: "Элитка, 2 ком, 67 м2, этаж 12/12, Сост: Евроремонт",
      geo: "Филармония, Уметалиева-Фрунзе",
      price: "$73 500 / 6 594 420сом",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxh3AaVIDSy-NJG-UTcSURNp_GgeVniwH1e6UL7bbNpQ&s",
      phone: "+996555555555",
    },
    {
      id: 12345,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvu-G6FOZu74ps1Z_PKw6Nri9nd-mEjVrQfdljgxjWYA&s",
      apartment: "Элитка, 2 ком, 67 м2, этаж 12/12, Сост: Евроремонт",
      geo: "Филармония, Уметалиева-Фрунзе",
      price: "$73 500 / 6 594 420сом",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxh3AaVIDSy-NJG-UTcSURNp_GgeVniwH1e6UL7bbNpQ&s",
      phone: "+996555555555",
    },
    {
      id: 12345,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvu-G6FOZu74ps1Z_PKw6Nri9nd-mEjVrQfdljgxjWYA&s",
      apartment: "Элитка, 2 ком, 67 м2, этаж 12/12, Сост: Евроремонт",
      geo: "Филармония, Уметалиева-Фрунзе",
      price: "$73 500 / 6 594 420сом",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxh3AaVIDSy-NJG-UTcSURNp_GgeVniwH1e6UL7bbNpQ&s",
      phone: "+996555555555",
    },
    {
      id: 12345,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvu-G6FOZu74ps1Z_PKw6Nri9nd-mEjVrQfdljgxjWYA&s",
      apartment: "Элитка, 2 ком, 67 м2, этаж 12/12, Сост: Евроремонт",
      geo: "Филармония, Уметалиева-Фрунзе",
      price: "$73 500 / 6 594 420сом",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxh3AaVIDSy-NJG-UTcSURNp_GgeVniwH1e6UL7bbNpQ&s",
      phone: "+996555555555",
    },
    {
      id: 12345,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvu-G6FOZu74ps1Z_PKw6Nri9nd-mEjVrQfdljgxjWYA&s",
      apartment: "Элитка, 2 ком, 67 м2, этаж 12/12, Сост: Евроремонт",
      geo: "Филармония, Уметалиева-Фрунзе",
      price: "$73 500 / 6 594 420сом",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxh3AaVIDSy-NJG-UTcSURNp_GgeVniwH1e6UL7bbNpQ&s",
      phone: "+996555555555",
    },
    {
      id: 12345,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvu-G6FOZu74ps1Z_PKw6Nri9nd-mEjVrQfdljgxjWYA&s",
      apartment: "Элитка, 2 ком, 67 м2, этаж 12/12, Сост: Евроремонт",
      geo: "Филармония, Уметалиева-Фрунзе",
      price: "$73 500 / 6 594 420сом",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxh3AaVIDSy-NJG-UTcSURNp_GgeVniwH1e6UL7bbNpQ&s",
      phone: "+996555555555",
    },
    {
      id: 12345,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvu-G6FOZu74ps1Z_PKw6Nri9nd-mEjVrQfdljgxjWYA&s",
      apartment: "Элитка, 2 ком, 67 м2, этаж 12/12, Сост: Евроремонт",
      geo: "Филармония, Уметалиева-Фрунзе",
      price: "$73 500 / 6 594 420сом",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxh3AaVIDSy-NJG-UTcSURNp_GgeVniwH1e6UL7bbNpQ&s",
      phone: "+996555555555",
    },
    {
      id: 12345,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvu-G6FOZu74ps1Z_PKw6Nri9nd-mEjVrQfdljgxjWYA&s",
      apartment: "Элитка, 2 ком, 67 м2, этаж 12/12, Сост: Евроремонт",
      geo: "Филармония, Уметалиева-Фрунзе",
      price: "$73 500 / 6 594 420сом",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxh3AaVIDSy-NJG-UTcSURNp_GgeVniwH1e6UL7bbNpQ&s",
      phone: "+996555555555",
    },
    {
      id: 12345,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvu-G6FOZu74ps1Z_PKw6Nri9nd-mEjVrQfdljgxjWYA&s",
      apartment: "Элитка, 2 ком, 67 м2, этаж 12/12, Сост: Евроремонт",
      geo: "Филармония, Уметалиева-Фрунзе",
      price: "$73 500 / 6 594 420сом",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxh3AaVIDSy-NJG-UTcSURNp_GgeVniwH1e6UL7bbNpQ&s",
      phone: "+996555555555",
    },
    {
      id: 12345,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvu-G6FOZu74ps1Z_PKw6Nri9nd-mEjVrQfdljgxjWYA&s",
      apartment: "Элитка, 2 ком, 67 м2, этаж 12/12, Сост: Евроремонт",
      geo: "Филармония, Уметалиева-Фрунзе",
      price: "$73 500 / 6 594 420сом",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxh3AaVIDSy-NJG-UTcSURNp_GgeVniwH1e6UL7bbNpQ&s",
      phone: "+996555555555",
    },
    {
      id: 12345,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvu-G6FOZu74ps1Z_PKw6Nri9nd-mEjVrQfdljgxjWYA&s",
      apartment: "Элитка, 2 ком, 67 м2, этаж 12/12, Сост: Евроремонт",
      geo: "Филармония, Уметалиева-Фрунзе",
      price: "$73 500 / 6 594 420сом",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxh3AaVIDSy-NJG-UTcSURNp_GgeVniwH1e6UL7bbNpQ&s",
      phone: "+996555555555",
    },
    {
      id: 12345,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvu-G6FOZu74ps1Z_PKw6Nri9nd-mEjVrQfdljgxjWYA&s",
      apartment: "Элитка, 2 ком, 67 м2, этаж 12/12, Сост: Евроремонт",
      geo: "Филармония, Уметалиева-Фрунзе",
      price: "$73 500 / 6 594 420сом",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxh3AaVIDSy-NJG-UTcSURNp_GgeVniwH1e6UL7bbNpQ&s",
      phone: "+996555555555",
    },
    {
      id: 12345,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvu-G6FOZu74ps1Z_PKw6Nri9nd-mEjVrQfdljgxjWYA&s",
      apartment: "Элитка, 2 ком, 67 м2, этаж 12/12, Сост: Евроремонт",
      geo: "Филармония, Уметалиева-Фрунзе",
      price: "$73 500 / 6 594 420сом",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxh3AaVIDSy-NJG-UTcSURNp_GgeVniwH1e6UL7bbNpQ&s",
      phone: "+996555555555",
    },
    {
      id: 12345,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvu-G6FOZu74ps1Z_PKw6Nri9nd-mEjVrQfdljgxjWYA&s",
      apartment: "Элитка, 2 ком, 67 м2, этаж 12/12, Сост: Евроремонт",
      geo: "Филармония, Уметалиева-Фрунзе",
      price: "$73 500 / 6 594 420сом",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxh3AaVIDSy-NJG-UTcSURNp_GgeVniwH1e6UL7bbNpQ&s",
      phone: "+996555555555",
    },
    {
      id: 12345,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvu-G6FOZu74ps1Z_PKw6Nri9nd-mEjVrQfdljgxjWYA&s",
      apartment: "Элитка, 2 ком, 67 м2, этаж 12/12, Сост: Евроремонт",
      geo: "Филармония, Уметалиева-Фрунзе",
      price: "$73 500 / 6 594 420сом",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxh3AaVIDSy-NJG-UTcSURNp_GgeVniwH1e6UL7bbNpQ&s",
      phone: "+996555555555",
    },
    {
      id: 12345,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvu-G6FOZu74ps1Z_PKw6Nri9nd-mEjVrQfdljgxjWYA&s",
      apartment: "Элитка, 2 ком, 67 м2, этаж 12/12, Сост: Евроремонт",
      geo: "Филармония, Уметалиева-Фрунзе",
      price: "$73 500 / 6 594 420сом",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxh3AaVIDSy-NJG-UTcSURNp_GgeVniwH1e6UL7bbNpQ&s",
      phone: "+996555555555",
    },
  ];

  return (
    <div className={cls.swiper}>
      <div className="container">
        <h1 className={cls.sell__p}>Срочная продажа</h1>
        <Swiper
          spaceBetween={50}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          slidesPerView={3}
          scrollbar={{
            draggable: true,
          }}
          modules={[
            Navigation,
            Pagination,
            Mousewheel,
            Scrollbar,
            Keyboard,
            A11y,
          ]}
          className="mySwiper"
        >
          {renderApiSlides.map((slide , index) => (
            <SwiperSlide key={index}>
              <div className={cls.card}>
                <img src={slide.img} alt="" />
                <p className={cls.apartment__p}>{slide.apartment}</p>
                <p className={cls.geo__p}>{slide.geo}</p>
                <p className={cls.price__p}>{slide.price}</p>
                <div className={cls.footer__slide}>
                  <img src={slide.avatar} alt="" />
                  <p className={cls.phone__p}>{slide.phone}</p>
                  <img
                    src="https://www.svgrepo.com/show/38250/whatsapp.svg"
                    alt=""
                  />
                  <img
                    src="https://www.svgrepo.com/show/451571/emblem-shared.svg"
                    alt=""
                  />
                  <img
                    src="https://www.svgrepo.com/show/503044/like.svg"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={cls.btn__wrap}>
          {<Button text="Посмотреть все" style="viewAll" />}
        </div>
      </div>
    </div>
  );
};

export default SwiperJS;
