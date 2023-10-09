import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "../models/users.interface";

const initialState: UserState = {
    user: null,
}

export const UsersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        getUser: (state, action) => {
           state.user = action.payload
        },
        createUser: (state, action: PayloadAction<User>) => {
           state.user = action.payload
        }
    }
})

export const {  
    getUser, 
    createUser 
    } 
    = UsersSlice.actions;

export default UsersSlice.reducer;