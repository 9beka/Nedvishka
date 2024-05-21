import React, { useEffect } from "react";
import cls from "./MyAdsPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { MyLoader, MyAdsCard, AntdEmpty } from "../../shared/ui";
import {
  ADS_GET_OWNERS_ASYNC,
  GET_CONVERTER,
} from "../../app/providers/Redux/actions/actions";

function MyAdsPage() {
  const dispatch = useDispatch();
  const { myAdsCart, loading, converter } = useSelector((state) => state.ads);

  useEffect(() => {
    dispatch(ADS_GET_OWNERS_ASYNC());
    dispatch(GET_CONVERTER());
  }, [dispatch]);

  const renderCards =
    myAdsCart && myAdsCart.items
      ? myAdsCart.items.map((item) => (
          <MyAdsCard
            key={item._id}
            item={item}
            userId={myAdsCart.userId}
            converter={converter}
          />
        ))
      : null;
  return (
    <>
      {loading && <MyLoader />}
      <div className="container">
        <div className={cls["myAdsPage"]}>
          <div className={cls["myAdsPage-cardWrapper"]}>
            {myAdsCart.items?.length === 0 ? (
              <AntdEmpty
                description="У Вас нет собственных объявлений!"
                btn_text="Добавить объявление"
              />
            ) : (
              renderCards
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyAdsPage;
