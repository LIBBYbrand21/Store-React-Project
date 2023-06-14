import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import filingReducer from "./filingReducer";
import paperReducer from "./paperReducer";
import electeonicReducer from "./electeonicReducer";
import stationeryReducer from "./stationeryReducer";

export const allReducers = combineReducers({
    electeonicReducer: electeonicReducer,
    paperReducer: paperReducer,
    filingReducer: filingReducer,
    stationeryReducer: stationeryReducer,
    cartReducer: cartReducer
})