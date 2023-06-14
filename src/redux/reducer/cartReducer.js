
const cart = [];

const cartReducer = (state = cart, action) => {
    
    if (action.type === "ADD_TO_CART") {
            const productindex = state.findIndex(p => p.code === action.payload.code);
            if (productindex === -1) {
                debugger
                action.payload.qty = action.index;
                console.log(cart)
                return [...state, action.payload]
            }
            else {
                debugger
                state[productindex].qty += action.index;
                state[productindex].price *= state[productindex].qty;
                return state;
            }
        // }


    }
    if (action.type === "DELETE_FROM_CART")
        state = state.filter(p => p.code != action.payload.code)
    console.log(cart)
    return state
};
export default cartReducer;