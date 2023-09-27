import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showBackToTopBtn: false
}

const backToTopSlice = createSlice({
    name: 'backToTop',
    initialState,
    reducers: {
        handleBackToTopBtn: (state) => {
            state.showBackToTopBtn = true;
        },
        hideBackToTopBtn: (state) => {
            state.showBackToTopBtn = false;
        }
    }
})

export const { handleBackToTopBtn, hideBackToTopBtn } = backToTopSlice.actions;
export default backToTopSlice.reducer;