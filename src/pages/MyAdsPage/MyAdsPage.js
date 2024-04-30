import React, {useEffect} from 'react';
import cls from './MyAdsPage.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {MyLoader} from "../../shared/ui";
import {ADS_GET_OWNERS_ASYNC} from "../../app/providers/Redux/actions/actions";

function MyAdsPage() {

    const dispatch = useDispatch()
    const {myAdsCart,loading} = useSelector(state => state.ads)
    console.log(myAdsCart)

    useEffect(() => {
        dispatch(ADS_GET_OWNERS_ASYNC())
    },[])
    return (
        <>
            {loading && <MyLoader/>}
            <div className={cls['myAdsPage']}>MY ADS</div>

        </>
    );
}

export default MyAdsPage;