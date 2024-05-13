import { configureStore } from "@reduxjs/toolkit";
import shipReducer from "./reducers/shipReducer";

const store = configureStore({
    reducer: {
        ships: shipReducer,
    },
});

export default store;