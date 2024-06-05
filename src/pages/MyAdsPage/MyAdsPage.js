import React, { useEffect, useMemo, useCallback } from "react";
import cls from "./MyAdsPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { MyLoader, MyAdsCard, AntdEmpty } from "../../shared/ui";
import { ADS_GET_OWNERS_ASYNC, GET_CONVERTER } from "../../app/providers/Redux/actions/actions";

function MyAdsPage() {
  const dispatch = useDispatch();
  const { myAdsCart, loading, converter } = useSelector((state) => state.ads);

  useEffect(() => {
    dispatch(ADS_GET_OWNERS_ASYNC());
    dispatch(GET_CONVERTER());
  }, [dispatch]);

  const renderCards = useMemo(() => {
    if (!myAdsCart || !myAdsCart.items || myAdsCart.items.length === 0) {
      return (
          <AntdEmpty
              description="У Вас нет собственных объявлений!"
              btn_text="Добавить объявление"
          />
      );
    }

    return myAdsCart.items.map((item) => (
        <MyAdsCard
            key={item._id}
            item={item}
            userId={myAdsCart.userId}
            converter={converter}
        />
    ));
  }, [myAdsCart, converter]);


  const renderLoader = useMemo(() => loading && <MyLoader />, [loading]);

  return (
      <div className="container">
        <div className={cls["myAdsPage"]}>
          <div className={cls["myAdsPage-cardWrapper"]}>
            {renderLoader}
            {renderCards}
          </div>
        </div>
      </div>
  );
}

export default MyAdsPage;
