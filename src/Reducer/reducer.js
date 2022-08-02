import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    hash: "",
    d: null,
    randomNumbers: null,
  },
  reducers: {
    update: (state, {payload}) => {
      const {hash, d, randomNumbers} = payload
      state.hash = hash
      state.d = d
      state.randomNumbers = randomNumbers
    }
  }
})

export const {update} = counterSlice.actions

export const {reducer: counterReducer} = counterSlice