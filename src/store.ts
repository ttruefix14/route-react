import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./stateManagement/counterReducer";
import memberReducer from "./stateManagement/memberReducer";

const store = configureStore({
    reducer: {
        counter: counterReducer, 
        member: memberReducer
    },
});

export default store;