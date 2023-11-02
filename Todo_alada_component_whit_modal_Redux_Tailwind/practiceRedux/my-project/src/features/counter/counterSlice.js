import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment: (state) =>{
            state.value = state.value + 1;
        },
        decrement:(state) =>{
            state.value = state.value -1;
        },
        reset:(state)=>{
            state.value = state.value = 0
        },
        incrementByAmount:(state) =>{
            state.value= state.value +5;
        }

    }
})

export const  {increment, decrement, reset, incrementByAmount} = counterSlice.actions

export default counterSlice.reducer