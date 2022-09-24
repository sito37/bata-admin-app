import axiosInstance from "../../../_helpers/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const loginUser = createAsyncThunk('auth/loginUser', async (user) => {
    const res = await axiosInstance.post('admin/signin', user)
    localStorage.setItem('token', res.data.token)
     return res.data
     
 })

 export const registerUser = createAsyncThunk('auth/registerUser', async (user) => {
    const res = await axiosInstance.post('admin/signup', user)
    return res.data 
 })