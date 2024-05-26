import React, { useEffect } from "react";
import cls from "./AllAdsPage.module.scss";
import { useDispatch,useSelector } from "react-redux";
import { AllAdsCard } from "../../shared/ui";
import { ADS_GET_CARTS_ASYNC, GET_CONVERTER } from "../../app/providers/Redux/actions/actions";
import { FilterForm } from "../../features/ui";
const AllAdsPage = () => {
  const dispatch = useDispatch();
  const { dataOfAds, converter } = useSelector((state) => state.ads);

  useEffect(()=>{
    dispatch(ADS_GET_CARTS_ASYNC())
    dispatch(GET_CONVERTER())
  },[dispatch])
  
  const renderData = dataOfAds.map((item) => {
    return <AllAdsCard key={item._id} item={item} converter={converter} />;
  });

  return (
    <div className={cls["all-ads-page"]}>
      <div className="container">
        <h1>Все объявления</h1>
        <FilterForm/>
        <div className={cls["all-ads-page__wrapper"]}>{renderData}</div>
      </div>
    </div>
  );
};

export default AllAdsPage;
