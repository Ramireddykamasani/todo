import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
 task:string[]
}

const initialState: CounterState = {
 task :[
    "welcome",
    "demo"
 ]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    add: (state, action: PayloadAction<string>) => {
        state.task.push(action.payload)
    },
    remove: (state,action:PayloadAction<string>) => {
        const result = state.task.filter((each) => each !== action.payload )
        state.task = result
    },
  },
})

// Action creators are generated for each case reducer function
export const {add,remove } = counterSlice.actions

export default counterSlice.reducer