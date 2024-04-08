import { createSlice } from "@reduxjs/toolkit";

export const magazinSlice = createSlice({
    name: "magazin",
    initialState: {
        items: [],
    },
    reducers: {
        addToCard: (state, action) => {
            localStorage.setItem("magazinItems", JSON.stringify(state.items));
            state.items.push(action.payload);
        },
        removeFromCard: (state, action) => {
            localStorage.setItem("magazinItems", JSON.stringify(state.items));
            state.items = state.items.filter((item) => item.id !== action.payload.id);
        },
        loadItemsFromStorage: (state) => {
            const items = localStorage.getItem("magazinItems");
            if (items) {
                state.items = JSON.parse(items);
            }
        },
    },
});

export const { addToCard, removeFromCard, loadItemsFromStorage } = magazinSlice.actions;

export const selectItems = (state) => state.magazin.items;

export default magazinSlice.reducer;
