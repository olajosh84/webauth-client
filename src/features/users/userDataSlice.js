import { createSlice } from "@reduxjs/toolkit";

/**this slice  helps create and clear user info in the cookie*/

let initialState = {
    session: {},
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