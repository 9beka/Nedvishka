import React, { useEffect } from "react";
import cls from "./AllAdsPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AllAdsCard } from "../../shared/ui";
import { ADS_GET_CARTS_ASYNC } from "../../app/providers/Redux/actions/actions";

const AllAdsPage = () => {
  const { dataOfAds, converter } = useSelector((state) => state.ads);

  const dispatch = useDispatch();

  const renderData = dataOfAds.map((item) => {
    return <AllAdsCard item={item} converter={converter} />;
  });

  useEffect(() => {
    dispatch(ADS_GET_CARTS_ASYNC());
  }, [dispatch]);

  return (
    <div className={cls["all-ads-page"]}>
      <div className="container">
        <h1>Все объявления</h1>
        <div className={cls["all-ads-page__wrapper"]}>{renderData}</div>
      </div>
    </div>
  );
};

export default AllAdsPage;
