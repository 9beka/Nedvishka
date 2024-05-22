import React from "react";
import cls from "./AllAdsPage.module.scss";
import { useSelector } from "react-redux";
import { AllAdsCard } from "../../shared/ui";

const AllAdsPage = () => {
  const { dataOfAds, converter } = useSelector((state) => state.ads);

  const renderData = dataOfAds.map((item) => {
    return <AllAdsCard item={item} converter={converter} />;
  });

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
