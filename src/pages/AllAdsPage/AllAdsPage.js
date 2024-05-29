import React, { useEffect, useState } from "react";
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
  const [priceForm, setPriceForm] = useState([0, 200000]);
  const [valueId, setValueId] = useState("");
  const [sostoyanie, setSostoyanie] = useState([]);
  const [tipNedvishki, setTipNedvishki] = useState([]);
  const [sotka, setSotka] = useState([0, 50000]);

  useEffect(() => {
    dispatch(ADS_GET_CARTS_ASYNC());
    dispatch(GET_CONVERTER());
  }, [dispatch]);

  const renderData = dataOfAds
    .filter((item) => {
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
            tipNedvishki.includes(item.TipNedvishki))
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
          item.PloshadM2 <= sotka[1]
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
          (sostoyanie.length === 0 || sostoyanie.includes(item.Sostoyanie))
        );
      }
    })
    .map((item) => (
      <AllAdsCard key={item._id} item={item} converter={converter} />
    ));

  useEffect(() => {
    dispatch(ADS_GET_CARTS_ASYNC());
  }, [dispatch]);

  const handleValueRooms = (e) => {
    const value = e?.target?.value;
    setRooms(value);
  };

  const handleValueDistrict = (name) => {
    if (!districts.includes(name)) {
      const districtArray = [...districts, name];
      setDistricts(districtArray);
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

  // const handleValueUpload = () => {
  //   form.setFieldsValue({ Upload: fileList });
  // };

  // const validatePhoneNumber = (rule, value, callback) => {
  //   const phoneNumberRegex = /^996\d{9}$/;
  //   if (!phoneNumberRegex.test(value)) {
  //     callback("Пожалуйста, введите номер телефона в формате: 996XXXXXXXXX");
  //   } else {
  //     callback();
  //   }
  // };

  // const transactionTypeFunction = (value) => {
  //   form.setFieldsValue({ typeOfDeal: value });
  //   setTransactionType(value);
  // };

  // const propertyTypeFunction = (value) => {
  //   form.setFieldsValue({ TipNedvishki: value });
  //   setPropertyType(value);
  // };

  // const areaFunction = (value) => {
  //   form.setFieldsValue({ PloshadM2: value });
  //   setArea(value);
  // };

  // const floorFunction = (value) => {
  //   console.log(value);
  //   form.setFieldsValue({ Floor: value });
  //   setFloor(value);
  // };

  // const totalFloorFunction = (value) => {
  //   form.setFieldsValue({ TotalFloor: value });
  //   setTotalFloor(value);
  // };

  // const yourNameFunction = (e) => {
  //   const value = e.target.value;
  //   form.setFieldsValue({ ownerName: value });
  //   setYourName(value);
  // };

  // const ownersPhoneNumberFunction = (value) => {
  //   form.setFieldsValue({ TelNumber: value });
  //   setOwnersPhoneNumber(value);
  // };

  // const streetCrossingFunction = (e) => {
  //   const value = e.target.value;
  //   form.setFieldsValue({ StreetAround: value });
  //   setStreetCrossing(value);
  // };

  // const stateFunction = (value) => {
  //   form.setFieldsValue({ Sostoyanie: value });
  //   setState(value);
  // };

  // const documentationFunction = (value) => {
  //   form.setFieldsValue({ Documents: value });
  //   setDocumentation(value);
  // };

  // const communicationsStateFunction = (value) => {
  //   form.setFieldsValue({ communication: value });
  //   setCommunicationsState(value);
  // };

  // const typeOfSentenceFunction = (value) => {
  //   form.setFieldsValue({ TypeOffer: value });
  //   setTypeOfSentence(value);
  // };

  // const furnitureFunction = (value) => {
  //   form.setFieldsValue({ furniture: value });
  //   setFurniture(value);
  // };

  // const paymentTypeFunction = (value) => {
  //   form.setFieldsValue({ Payment: value });
  //   setPaymentType(value);
  // };

  // const objectStatusFunction = (value) => {
  //   form.setFieldsValue({ StatusObject: value });
  //   setObjectStatus(value);
  // };

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
          />
          <div className={cls["all-ads-page__wrapper"]}>{renderData}</div>
        </div>
      </div>
    </>
  );
};

export default AllAdsPage;
