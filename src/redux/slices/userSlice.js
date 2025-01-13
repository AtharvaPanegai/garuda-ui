
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userInfo: null,
    isAuthenticated: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart(state, action) {
            state.loading = true;
        },
        signUpStart(state) {
            state.loading = true
        },
        setUserInfo(state, action) {
            state.userInfo = action.payload.user;
            state.token = action.payload.token
            state.isAuthenticated = true;
            state.loading = false
        },
        logout(state) {
            state.userInfo = null;
            state.isAuthenticated = false;
        },
    },
});

export const { setUserInfo, signInStart, signUpStart, logout } = userSlice.actions;
export default userSlice.reducer;
