import { createSlice } from "@reduxjs/toolkit";

export const counterSlice =  createSlice({
    name: "counter",
    initialState:{ value: 0},

    reducers:{
        increment:(state)=>{
            // immer lib , which help us to access and change the state.
            state.value += 1;
        },
        decrement:(state)=>{
            state.value -= 1
        }
    }
})

export const {increment,decrement} = counterSlice.actions
export default counterSlice.reducer