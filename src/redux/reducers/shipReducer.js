import { createReducer } from "@reduxjs/toolkit";
import { addShip, removeShip } from "../actions/shipAction";

const initialState = [];

const shipReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addShip, (state, action) => {
            state.push(action.payload);
        })
        .addCase(removeShip, (state, action) => {
            return state.filter((ship) => ship.id !== action.payload.id);
        });
});

export default shipReducer;