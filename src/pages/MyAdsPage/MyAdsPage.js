import React, {useEffect} from 'react';
import cls from './MyAdsPage.module.scss'
import {useDispatch, useSelector} from "react-redux";
import { MyLoader,MyAdsCard} from "../../shared/ui";
import {ADS_GET_OWNERS_ASYNC} from "../../app/providers/Redux/actions/actions";

function MyAdsPage() {

    const dispatch = useDispatch()
    const {myAdsCart,loading} = useSelector(state => state.ads)
    console.log(myAdsCart)

    useEffect(() => {
        dispatch(ADS_GET_OWNERS_ASYNC())
    },[])



    const renderCards = myAdsCart && myAdsCart.items
        ? myAdsCart.items.map(item => <MyAdsCard key={item._id} item={item} />)
        : null;    return (
        <>
            {loading && <MyLoader/>}
            <div className="container">
                <div className={cls['myAdsPage']}>
                    <div className={cls['myAdsPage-cardWrapper']}>{renderCards}</div>
                </div>

            </div>

        </>
    );
}

export default MyAdsPage;