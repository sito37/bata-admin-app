import { createSlice } from "@reduxjs/toolkit";
import { getAllCategories, createCategory } from "./category.actions";




const initialState = {
    categories: [],
    loading: false,
    error: null,
}

const buildNewCategories = (parentId, categories=[], category) => {
    let allCategories = []

    if(parentId === undefined){
        return [
            ...categories,
            {
                _id: category._id,
                name: category.name,
                slug: category.slug,
                children: []
            }
        ]
    }

    for(let cat of categories){
        if(cat._id === parentId){
            allCategories.push({
                ...cat,
                children: cat.children ? buildNewCategories(parentId, [...cat.children, {
                    _id: category._id,
                    name: category.name,
                    slug: category.slug,
                    parentId: category.parentId,
                    children: category.children
                }], category) : []
            })
        }else{
            allCategories.push({
                ...cat,
                children: cat.children ? buildNewCategories(parentId, cat.children, category) : []
            })
        }
    }

    return allCategories
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAllCategories.pending, state => {
            state.loading = true
        })
        builder.addCase(getAllCategories.fulfilled, (state, {payload}) => {
            state.loading = false
            state.categories = payload
        })
        builder.addCase(getAllCategories.rejected, (state, {payload}) => {
            state.loading = false
            state.error = payload
        })
        builder.addCase(createCategory.pending, (state) => {
            state.loading = true
        })
        builder.addCase(createCategory.fulfilled, (state, {payload}) => {
            const {category} = payload
            const updatedCategories = buildNewCategories(category.parentId, state.categories, category)
            state.loading = false
            state.categories = updatedCategories
        })
        builder.addCase(createCategory.rejected, (state, {payload}) => {
            state.loading = false
            state.error = payload
        })
    }

})

export default categorySlice.reducer
