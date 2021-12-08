import * as actionTypes from './shopping-type';

const INITIAL_STATE = {
 menuItems: [ 
 ],
 cart: [],
 currentItem: null,
 isFetching: false,
 error: undefined
}
const shopReducer  = (state = INITIAL_STATE, action) => {

    switch(action.type){
        case actionTypes.ADD_TO_CART:
            //get the menu data from menuItems array
            const menuitem = state.menuItems.find(item => item.itemId === action.payload.itemId)
            //check if menuitem is in the cart already
            const inCart = state.cart.find(item => item.itemId === action.payload.itemId ? true : false);
            return {
                 //reference to the current state we are modifying
                ...state,
                //if menuitem is in the cart, create a new 'copy array' of it and increase amount by one
                cart: inCart ? state.cart.map(item => item.itemId === action.payload.itemId ? {...item, amount: item.amount +1} : item)
                //if not, create a new 'copy array' of cart and add the item there
                : [...state.cart, {...menuitem, amount: 1} ]
            };
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.itemId !== action.payload.itemId) //put everything into cart expect the removed item
            }
        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map(item => item.itemId === action.payload.itemId ? {...item, amount: action.payload.qty} : item)

            }
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            }
        case actionTypes.GET_MENUITEMS_REQUEST:
            return {
                ...state
            
            }
        case actionTypes.GET_MENUITEMS_FAILURE:
            return {
                ...state
                }
        case actionTypes.GET_MENUITEMS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                menuItems: action.menuItems
              };
        default:
            return state;

    }

}

export default shopReducer;