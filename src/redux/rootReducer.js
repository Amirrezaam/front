import { combineReducers } from 'redux';
import categoryReducer from './category/categoryReducer';
import ordersReducer from './orders/ordersReducer';

const reducers = combineReducers({
    categoryState: categoryReducer,
    ordersState: ordersReducer
});

export default reducers;