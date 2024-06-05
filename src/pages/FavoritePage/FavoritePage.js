import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_FAVORITE_ASYNC } from "../../app/providers/Redux/actions/actions";
import { AllAdsCard, MyLoader } from "../../shared/ui";
import cls from "./FavoritePage.module.scss";

const FavoritePage = () => {
  const { favorite, loading } = useSelector((state) => state.favorite);
  const { converter } = useSelector((state) => state.ads);

  console.log(favorite);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_FAVORITE_ASYNC());
  }, [dispatch]);

  const renderData = favorite?.map((item) => (
    <AllAdsCard key={item._id} item={item} converter={converter} />
  ));
  return (
    <>
      {loading && <MyLoader />}
      <div className={cls["favorite-page"]}>
        <div className="container">
          <h1>Избранные</h1>

          <div className={cls["favorite-page__wrapper"]}>{renderData}</div>
        </div>
      </div>
    </>
  );
};

export default FavoritePage;
