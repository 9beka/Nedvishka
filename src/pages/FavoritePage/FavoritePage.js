import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_FAVORITE_ASYNC } from "../../app/providers/Redux/actions/actions";
import { AllAdsCard } from "../../shared/ui";

const FavoritePage = () => {
  const { favorite } = useSelector((state) => state.favorite);
  const { converter } = useSelector((state) => state.ads);

  console.log(favorite);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_FAVORITE_ASYNC());
  }, [dispatch]);

  //   const renderData = favorite.map((item) => (
  //     <AllAdsCard key={item._id} item={item} converter={converter} />
  //   ));
  return <div></div>;
};

export default FavoritePage;
