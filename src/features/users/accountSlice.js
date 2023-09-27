import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showSidebar: false,
    showAvatars: false,
    selectedAvatar: "",
    showUserSearchBar: false,
}

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        handleShowSidebar: (state) => {
           // state.showUserSearchForm = false;
            state.showSidebar = !state.showSidebar;
        },
        hideSidebar: (state) => {
            state.showSidebar = false;
        },
        handleShowAvatars: (state, action) => {
            state.showAvatars = action.payload;
        },
        hideAvatars: (state) => {
            state.showAvatars = false;
        },
        handleSelectAvatar: (state, action) => {
            let avatar = action.payload;
            state.selectedAvatar = avatar;
            state.showAvatars = false;
        },
        handleShowUserSearchBar: (state) => {
            //state.showSidebar = false;
            state.showUserSearchBar = true;
        },
        handleCloseUserSearchBar: (state) => {
            state.showUserSearchBar = false;
        }
    }
})

export const {  handleShowSidebar, hideSidebar, handleShowAvatars, hideAvatars,
                handleSelectAvatar, handleShowUserSearchBar, 
                handleCloseUserSearchBar 
            } = accountSlice.actions;
export default accountSlice.reducer;