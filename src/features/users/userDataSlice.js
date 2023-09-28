import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    session: JSON.parse(localStorage.getItem('session')) || {},
}

const userDataSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {
        createSession: (state, action) => {
            state.session = action.payload;
        },
        clearSession: (state) => {
            state.session = {};
        }
    }
})

export const { createSession, clearSession } = userDataSlice.actions;
export default userDataSlice.reducer;