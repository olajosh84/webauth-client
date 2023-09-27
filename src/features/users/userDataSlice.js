import { createSlice } from "@reduxjs/toolkit";

/**this slice  helps create and clear user info in the cookie*/
let expiryDate = new Date();
expiryDate.setDate(expiryDate.getDate() + 7);

let initialState = {
    session: {},
    cookieExpiry: expiryDate,
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