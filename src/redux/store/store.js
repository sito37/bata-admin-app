import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/users/auth.Slice'
import categoryReducer from '../features/category/category.slice'
import productReducer from '../features/product/product.slice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        category: categoryReducer,
        product: productReducer

    }
})

export default store