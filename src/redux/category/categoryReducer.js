const initState = {
    loading: false,
    categories: null,
    error: null,
}

const categoryReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_CATEGORY_REQUEST":
            return {
                ...state,
                loading: true,
            }
        case "GET_CATEGORY_SUCCESS":
            return {
                ...state,
                loading: false,
                categories: action.payload,
                error: null
            }
        case "GET_CATEGORY_FAILED":
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}

export default categoryReducer;