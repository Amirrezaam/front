import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Advertising from '../../../components/Advertising';
import Loader from '../../../components/Loader';

export default function MostPopularOrders() {

    const [mostPopularOrders, setMostPopularOrders] = useState(null);

    const fetchMostPopularOrders = () => {
        axios.get("http://127.0.0.1:8000/api/order-popular")
            .then(res => setMostPopularOrders(res.data.popularorder.reverse()))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchMostPopularOrders();
    }, [])

    return (
        <>
            {
                mostPopularOrders ? mostPopularOrders.map(order => <Advertising order={order} />) : <Loader />
            }
        </>
    )
}
