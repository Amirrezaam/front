import axios from "axios"

const getOrdersRequest = () => {
    return {
        type: "GET_ORDERS_REQUEST"
    }
}

const getOrdersSuccess = (orders) => {
    return {
        type: "GET_ORDERS_SUCCESS",
        payload: orders
    }
}

const getOrdersFailed = err => {
    return {
        type: "GET_ORDERS_FAILED",
        payload: err
    }
}

const getOrders = () => {
    return (dispatch) => {

        dispatch(getOrdersRequest());

        axios.get("http://127.0.0.1:8000/api/orders")
            .then(res => {
                console.log(res.data.results)
                dispatch(getOrdersSuccess(res.data.results.reverse()))
            }).catch(err => dispatch(getOrdersFailed(err.message)))
    }
}

export {
    getOrdersRequest,
    getOrdersSuccess,
    getOrdersFailed,
    getOrders,
}