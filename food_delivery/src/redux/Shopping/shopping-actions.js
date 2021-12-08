import * as actionTypes from './shopping-type';
import axios from 'axios';

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

export const getMenuItems = (restaurantId) => {

    return (dispatch) => {

        dispatch({
            type: actionTypes.GET_MENUITEMS_REQUEST
        });
        return axios.get('/restaurants/menuitem/'+ restaurantId)
        .then(response => {
            const menuItems = response.data;
            dispatch({
                type: actionTypes.GET_MENUITEMS_SUCCESS,
                menuItems: menuItems
            });
        })
        .catch(err=> {
            const errorMsg = err.message;
            dispatch({
                type: actionTypes.GET_MENUITEMS_FAILURE,
                error: errorMsg
            });
        })
    }
}