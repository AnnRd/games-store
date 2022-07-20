import { createSlice } from "@reduxjs/toolkit"; //вспомогательная ф-я, предоставляющая actions, reducer...

const gamesSlice = createSlice({
    name: 'games',
    initialState: {
        currentGame: null
    },
    reducers: {
        setCurrentGame: (state, action) => {
            state.currentGame = action.payload;
        }
    }
});

export const {setCurrentGame} = gamesSlice.actions; //экспорт actions
export default gamesSlice.reducer;