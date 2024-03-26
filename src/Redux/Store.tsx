import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./Slice";
export default configureStore({
    reducer: {
        cards: cardReducer,
    }
});