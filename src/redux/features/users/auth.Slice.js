import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./auth.actions";


const userToken = localStorage.getItem('token') ? localStorage.getItem('token') : null

const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,
}



const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logoutUser: (state) => {
            localStorage.removeItem('token')
            state.loading = false
            state.userInfo = null
            state.userToken = null
            state.error = null
        }
    },
    extraReducers: builder => {
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(loginUser.fulfilled, (state, {payload}) => {
            state.loading = false
            state.userInfo = JSON.stringify(payload)
            state.userToken = payload.token
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message 
        })
        // registerUser actions

        builder.addCase(registerUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(registerUser.fulfilled, (state, {payload}) => {
            state.loading = false
            state.userInfo = JSON.stringify(payload)
        })
        builder.addCase(registerUser.rejected, (state, {payload}) => {
            state.loading = false
            state.error = JSON.stringify(payload)
        })
    }
})

export default authSlice.reducer
export const {logoutUser} = authSlice.actions
