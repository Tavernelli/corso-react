import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import { citiesReducer } from "./citiesSlice";

//le slice sono le singole parti di uno stato

export default configureStore({
    reducer: {
        counter: counterReducer, //proprietà dello stato utilizzate dai reducer specifici
        cities: citiesReducer,
    },
})