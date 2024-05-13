import { createReducer } from "@reduxjs/toolkit";
import { increment, decrement } from "../action/counterAction";

const initialState = 0;

const counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(increment, (state) => state + 1)
        .addCase(decrement, (state) => state - 1);
});

export default counterReducer;