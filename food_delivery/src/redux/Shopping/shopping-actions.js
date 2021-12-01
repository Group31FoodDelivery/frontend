import * as actionTypes from './shopping-type';

export const addToCart = (itemId) => {

    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            itemId: itemId
        }
    }

}


export const removeFromCart = (itemId) => {

    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            itemId: itemId
        }
    }
}


export const adjustQty = (itemId, value) => {

    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
            itemId: itemId,
            qty: value
        }
    }
}

export const loadCurrentItem = (item) => {

    return{
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: {
           item
        }
    }

}