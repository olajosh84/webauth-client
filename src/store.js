import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import slideSlice from "./features/slides/slideSlice";
import userDataSlice from "./features/users/userDataSlice";
import { apiSlice } from "./features/apis/apiSlice";
import mailAlertSlice from "./features/alerts/mailAlertSlice";
import otpSlice from "./features/auth/otpSlice";
import accountSlice from "./features/users/accountSlice";
import searchSlice from "./features/modals/searchSlice";
import backToTopSlice from "./features/modals/backToTopSlice";

export const store = configureStore({
    reducer: {
        slide: slideSlice,
        userData: userDataSlice,
        mailAlert: mailAlertSlice,
        otpInfo: otpSlice,
        accountInfo: accountSlice,
        searchBar: searchSlice,
        backToTop: backToTopSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: process.env.REACT_APP_ENV === "development"
})