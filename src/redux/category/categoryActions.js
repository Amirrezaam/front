import axios from "axios"

const getCategoryRequest = () => {
    return {
        type: "GET_CATEGORY_REQUEST"
    }
}

const getCategorySuccess = (categories) => {
    return {
        type: "GET_CATEGORY_SUCCESS",
        payload: categories
    }
}

const getCategoryFailed = err => {
    return {
        type: "GET_CATEGORY_FAILED",
        payload: err
    }
}

const getCategory = () => {
    return (dispatch) => {

        dispatch(getCategoryRequest());

        axios.get("http://127.0.0.1:8000/api/Categories")
            .then(res => {
                dispatch(getCategorySuccess(res.data.results))
            }).catch(err => dispatch(getCategoryFailed(err.message)))
    }
}

export {
    getCategoryRequest,
    getCategorySuccess,
    getCategoryFailed,
    getCategory,
}