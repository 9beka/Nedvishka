import React, { useEffect, useState,useMemo,useCallback } from "react";
import cls from "./AllAdsPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AllAdsCard, MyLoader } from "../../shared/ui";
import {
  ADS_GET_CARTS_ASYNC,
  GET_CONVERTER,
} from "../../app/providers/Redux/actions/actions";
import { FilterForm } from "../../features/ui";

const AllAdsPage = () => {
  const dispatch = useDispatch();
  const { dataOfAds, converter } = useSelector((state) => state.ads);
  const { loading } = useSelector((state) => state.favorite);

  const [tabsValue, setTabsValue] = useState("Все");
  const [rooms, setRooms] = useState("");
  const [districts, setDistricts] = useState([]);
  const [complex, setComplex] = useState([]);
  const [priceForm, setPriceForm] = useState([0, 200000]);
  const [valueId, setValueId] = useState("");
  const [sostoyanie, setSostoyanie] = useState([]);
  const [tipNedvishki, setTipNedvishki] = useState([]);
  const [sotka, setSotka] = useState([0, 50000]);

  useEffect(() => {
    dispatch(ADS_GET_CARTS_ASYNC());
    dispatch(GET_CONVERTER());
  }, [dispatch]);

  useEffect(() => {
    dispatch(ADS_GET_CARTS_ASYNC());
  }, [dispatch]);


  const filteredData = useMemo(() => {
    return dataOfAds.filter((item) => {
      if (tabsValue === "Все") {
        return (
            (!rooms || item.Rooms === rooms) &&
            (districts.length === 0 ||
                item.Districts.some((district) => districts.includes(district))) &&
            item.PriceForm >= priceForm[0] &&
            item.PriceForm <= priceForm[1] &&
            (!valueId || item._id.includes(valueId)) &&
            (sostoyanie.length === 0 || sostoyanie.includes(item.Sostoyanie)) &&
            (tipNedvishki.length === 0 ||
                tipNedvishki.includes(item.TipNedvishki)) &&
            (complex.length === 0 ||
                item.Complex.some((item) => item.includes(complex)))
        );
      } else if (
          tabsValue === "Дома\nи\nучастки" ||
          tabsValue === "Коммерческая"
      ) {
        return (
            (!rooms || item.Rooms === rooms) &&
            (districts.length === 0 ||
                item.Districts.some((district) => districts.includes(district))) &&
            item.PriceForm >= priceForm[0] &&
            item.PriceForm <= priceForm[1] &&
            (!valueId || item._id.includes(valueId)) &&
            (sostoyanie.length === 0 || sostoyanie.includes(item.Sostoyanie)) &&
            item.PloshadM2 >= sotka[0] &&
            item.PloshadM2 <= sotka[1] &&
            (complex.length === 0 ||
                item.Complex.some((item) => item.includes(complex)))
        );
      } else {
        return (
            item.TipNedvishki === tabsValue &&
            (!rooms || item.Rooms === rooms) &&
            (districts.length === 0 ||
                item.Districts.some((district) => districts.includes(district))) &&
            item.PriceForm >= priceForm[0] &&
            item.PriceForm <= priceForm[1] &&
            (!valueId || item._id.includes(valueId)) &&
            (sostoyanie.length === 0 || sostoyanie.includes(item.Sostoyanie)) &&
            (complex.length === 0 ||
                item.Complex.some((item) => item.includes(complex)))
        );
      }
    })
  }, [dataOfAds, tabsValue, rooms, districts, priceForm, valueId, sostoyanie, tipNedvishki, complex, sotka]);


  const renderData = useMemo(() => {
    return filteredData.map((item) => (
        <AllAdsCard key={item._id} item={item} converter={converter} />
    ));
  }, [filteredData, converter]);


  const handleValueRooms = useCallback((e) => {
    const value = e?.target?.value;
    setRooms(value);
  }, []);

  const handleValueDistrict = (name) => {
    if (!districts.includes(name)) {
      const districtArray = [...districts, name];
      setDistricts(districtArray);
    }
  };

  const handleValueComplex = (name) => {
    if (!complex.includes(name)) {
      const complexArray = [...complex, name];
      setComplex(complexArray);
    }
  };

  const handleValuePrice = (value) => {
    setPriceForm(value);
  };

  const handleValueId = (e) => {
    setValueId(e.target?.value);
  };

  const handleValueSostoyanie = (value) => {
    setSostoyanie(value);
  };

  const handleValueTipNedvishki = (value) => {
    if (!tipNedvishki.includes(value)) {
      const tipNedvishkiList = [...value];
      setTipNedvishki(tipNedvishkiList);
    }
  };

  const handleValueSotka = (value) => {
    setSotka(value);
  };

  return (
    <>
      {loading && <MyLoader />}
      <div className={cls["all-ads-page"]}>
        <div className="container">
          <h1>Все объявления</h1>
          <FilterForm
            setTabsValue={setTabsValue}
            handleValueRooms={handleValueRooms}
            handleValueDistrict={handleValueDistrict}
            setDistricts={setDistricts}
            handleValuePrice={handleValuePrice}
            priceForm={priceForm}
            handleValueId={handleValueId}
            handleValueSostoyanie={handleValueSostoyanie}
            setPriceForm={setPriceForm}
            setValueId={setValueId}
            setSostoyanie={setSostoyanie}
            handleValueTipNedvishki={handleValueTipNedvishki}
            handleValueSotka={handleValueSotka}
            sotka={sotka}
            handleValueComplex={handleValueComplex}
          />
          <div className={cls["all-ads-page__wrapper"]}>{renderData}</div>
        </div>
      </div>
    </>
  );
};

export default AllAdsPage;
