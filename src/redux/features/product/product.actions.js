import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../_helpers/axios";

export const createProduct = createAsyncThunk('product/createProduct', async (form) => {
 const res = await axiosInstance.post('product/create', form)
 return res.data
})