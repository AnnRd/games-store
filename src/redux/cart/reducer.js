import { createSlice } from "@reduxjs/toolkit"; //вспомогательная ф-я, предоставляющая actions, reducer...

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: []
    },
    reducers: {
        setItemInCart: (state, action) => {
            state.itemsInCart.push(action.payload) //пушу игру, полученную из action
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(game => game.id !== action.payload)
        }
    }
});

export const {setItemInCart, deleteItemFromCart} = cartSlice.actions; //экспорт actions
export default cartSlice.reducer;