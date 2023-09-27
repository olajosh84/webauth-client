import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    showAlert: false,
}

const mailAlertSlice = createSlice({
    name: "mailAlert",
    initialState,
    reducers: {
        showMailAlert: (state) => {
            state.showAlert = true;
        },
        dismissMailAlert: (state) => {
            state.showAlert = false;
        }
    }
});

export const { showMailAlert, dismissMailAlert } = mailAlertSlice.actions;
export default mailAlertSlice.reducer;