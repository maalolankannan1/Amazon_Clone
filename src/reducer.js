export const initialState = {
    basket: [],
    user: null
};

export const getBasketTotal = (products) => products?.reduce((prev, curr) => prev + curr.price, 0);

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'USER':
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            const index =  state.basket.findIndex((item) => item.id === action.id);
            let newBasket = [...state.basket];
            if(index >= 0) {
                newBasket.splice(index, 1);
            }
            else {
                console.warn(`Can't remove item (id: ${action.id}) as it is not in basket`)
            }
            return {
                ...state,
                basket: newBasket
            }
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            }
            
        default:
            return state;
    }
}

export default reducer;