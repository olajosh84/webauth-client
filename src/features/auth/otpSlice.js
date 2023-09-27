import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    loading: false,
    showOTPForm: false,
}

const otpSlice = createSlice({
    name: "otp",
    initialState,
    reducers: {
        setLoading: ( state, action ) => {
            //state.loading = !state.loading;
            state.loading = action.payload;
        },
        setShowOTPForm: ( state, action ) => {
            //state.showOTPForm = !state.showOTPForm;
            state.showOTPForm = action.payload
        },
        
    }
})
export const { setLoading, setShowOTPForm } = otpSlice.actions;
export default otpSlice.reducer;

