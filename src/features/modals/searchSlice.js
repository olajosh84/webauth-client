import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    isOpen: false
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        toggleSearchBar: (state) => {
            state.isOpen = !state.isOpen;
        },
        openSearchBar: (state) => {
            state.isOpen = true;
        },
        closeSearchBar: (state) => {
            state.isOpen = false;
        }
    }
});

export const { toggleSearchBar, closeSearchBar, openSearchBar } = searchSlice.actions;
export default searchSlice.reducer