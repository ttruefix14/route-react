import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./stateManagement/counterReducer";
import memberReducer from "./stateManagement/memberReducer";
import { orderCheck } from "./stateManagement/slice";
import orderReducer from "./stateManagement/slice";

const store = configureStore({
    reducer: {
        counter: counterReducer, 
        member: memberReducer,
        order: orderReducer,
    },
});

export default store;