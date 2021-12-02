import * as actionTypes from './shopping-type';

const INITIAL_STATE = {
 menuItems: [ 

    {
    "itemId":"d58dbc6e-a6c5-43fc-b1fe-f68c7515e28d",
    "Name":"KEBUKÄNKKY",
    "Description":"Kebua känkyn päällä",
    "Price":8,
    "Image":{"type":"Buffer","data":[]},
    "Category":"Pizza",
    "amount":0,
    "restaurantId":"99c2d507-061e-456a-a370-8130db1454ae"
    },
    {"itemId":"edf1b467-9ce0-4d29-a979-2af49964e84c",
    "Name":"Tipuämpäri",
    "Description":"Rapeaa popparikanaa",
    "Price":10,
    "Image":{"type":"Buffer","data":[]},
    "Category":"Chicken",
    "amount":0,
    "restaurantId":"ae4c23ce-9ccf-4fed-991f-2d8d31b276d4"
    }

 ],
 cart: [],
 currentItem: null,
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
        default:
            return state;

    }

}

export default shopReducer;