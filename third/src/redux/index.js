import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterReducer";
import cartReducer from "./cartReducer";

export const store = configureStore({
	reducer: {
		counterSlice: counterReducer,
		cartSlice: cartReducer
	},
});