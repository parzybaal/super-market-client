import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "../slices/productSlice";
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'

export const store = configureStore({
    reducer: {
        products: productSlice.reducer
    }
})

export const useAppDispatch:()=> typeof store.dispatch = useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;