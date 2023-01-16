import React from 'react';
import {createSlice} from "@reduxjs/toolkit";

export type InitialStateType = {
    cars: Array<String>
}
const initialState:InitialStateType = {
    cars: ['Model S,Model 3,Model X,Model Y']

}

const carSlice = createSlice( {
    name:'car',
    initialState,
    reducers:{}
})

export const selectCars = (state: { cars: { car: any; }; }) => state.cars.car

export default carSlice.reducer