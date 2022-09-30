import { createSlice } from "@reduxjs/toolkit";
import { createProduct } from "./product.actions";


const initialState = {
    Products: [],
    loading: false,
    error: null,
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducer: {},
    extraReducers: builder => {
        builder.addCase(createProduct.pending, state => {
            state.loading = true
        })
        builder.addCase(createProduct.fulfilled, (state, {payload}) => {
            state.loading = false
            state.products = payload
        })
        builder.addCase(createProduct.rejected, (state, {payload}) => {
            state.loading = false
            state.error = payload
        })
    }

})

export default productSlice.reducer