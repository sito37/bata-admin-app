import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../_helpers/axios";

export const getAllCategories = createAsyncThunk('category/getAllCategories', async () => {
    const res = await axiosInstance.get('/category/getcategories')
    return res.data.categoryList
})

export const createCategory = createAsyncThunk('category/createCategory', async (form) => {
    const res = await axiosInstance.post('/category/create', form)
    return {category: res.data.category}
})