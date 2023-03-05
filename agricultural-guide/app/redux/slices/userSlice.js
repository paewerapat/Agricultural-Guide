import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: '', fullName: '', token: '', role: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.userId = action.payload.userId;
            state.fullName = action.payload.fullName;
            state.token = action.payload.token;
            state.role = action.payload.role;
        },
        currentUser: (state, action) => {
            state.userId = action.payload.userId;
            state.fullName = action.payload.fullName;
            state.token = action.payload.token;
            state.role = action.payload.role;
        },
        logout: (state) => {
            state = initialState;
        }
    }
})

export const { login, currentUser, logout } = userSlice.actions;
export default userSlice.reducer;