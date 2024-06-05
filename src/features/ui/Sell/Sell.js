import React, { useEffect, useMemo, useCallback, useState } from "react";
import cls from "./Sell.module.scss";
import { AllAdsCard } from "../../../shared/ui";
import { useSelector, useDispatch } from "react-redux";
import { ADS_GET_CARTS_ASYNC, GET_CONVERTER } from "../../../app/providers/Redux/actions/actions";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Sell = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { dataOfAds, converter, loading } = useSelector((state) => state.ads);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        dispatch(ADS_GET_CARTS_ASYNC());
        dispatch(GET_CONVERTER());
    }, [dispatch]);

    useEffect(() => {
        if (!loading) {
            setIsDataLoaded(true);
        }
    }, [loading]);

    const handleNavigate = useCallback(() => {
        navigate("/allAds");
    }, [navigate]);

    const displayedAds = useMemo(() => dataOfAds.slice(0, 6), [dataOfAds]);

    return (
        <div className={cls.sell__block}>
            <div className="wrapper">
                <h1 className={`${cls.sell__p}`}>Срочная продажа</h1>
                {isDataLoaded && (
                    <>
                        <div className={cls.sell__wrapper}>
                            {displayedAds.map((item, index) => (
                                <AllAdsCard key={index} converter={converter} item={item} />
                            ))}
                        </div>
                        <div className={`${cls.btn__wrap}`}>
                            <Button
                                type="primary"
                                style={{ marginTop: "20px" }}
                                onClick={handleNavigate}
                            >
                                Посмотреть все
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default React.memo(Sell);
