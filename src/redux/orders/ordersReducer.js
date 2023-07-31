const initState = {
    loading: false,
    orders: null,
    error: null,
}

const ordersReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_ORDERS_REQUEST":
            return {
                ...state,
                loading: true,
            }
        case "GET_ORDERS_SUCCESS":
            // console.log(action.payload)
            return {
                ...state,
                loading: false,
                orders: action.payload,
                error: null
            }
        case "GET_ORDERS_FAILED":
            // console.log(action.payload)
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}

export default ordersReducer;