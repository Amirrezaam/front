import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Advertising from '../../../components/Advertising';
import Loader from '../../../components/Loader';

export default function MostVisitedOrders() {

    const [mostVisitedOrders, setMostVisitedOrders] = useState(null);

    const fetchMostVisitedOrders = () => {
        axios.get("http://127.0.0.1:8000/api/order-favorites")
            .then(res => setMostVisitedOrders(res.data.orderfavorites.reverse()))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchMostVisitedOrders();
    }, [])

    return (
        <>
            {
                mostVisitedOrders ? mostVisitedOrders.map(order => <Advertising order={order} />) : <Loader />
            }
        </>
    )
}
