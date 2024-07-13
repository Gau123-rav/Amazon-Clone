import {combineReducers} from 'redux';

const initialState = {
    products: [],
    error: null,
};

export const getProductsreducer = (state = initialState, action)=>{
    switch(action.type){
        case "SUCCESS_GET_PRODUCTS":
            return {products:action.payload}
        case "FAIL_GET_PRODUCTS":
            return {error:action.payload}
        default : return state
    }
}