import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';
import Advertising from '../../../components/Advertising'
import Loader from '../../../components/Loader';

export default function MyAds() {

    const [cookies, setCookie, removeCookie] = useCookies(["userID"]);
    const [orders, setOrder] = useState(null);

    const { orders: state } = useSelector(state => state.ordersState);

    useEffect(() => {
        setOrder(state);
    }, [state])

    return (
        <div className="col-md-8">
            <div className="my-ads section">
                <h2>آگهی‌های من</h2>

                {
                    orders ? orders?.filter(order => order.user_id == cookies.userID)
                    .map(order => <Advertising order={order} />)
                    : <Loader />
                }
            </div>
        </div>
    )
}
