import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductsState } from '../models/products.interface'

const initialState: ProductsState = {
    products: [],
}

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        getAllProducts: (state, action) => {
           state.products = action.payload
        },
        postAProduct: (state, action: PayloadAction<Product>) => {
           state.products = [...state.products, action.payload]
        }
    }
})

export const {  
    getAllProducts, 
    postAProduct 
    } 
    = productSlice.actions;

export default productSlice.reducer;