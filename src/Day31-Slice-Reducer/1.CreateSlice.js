import { createSlice } from "@reduxjs/toolkit";

const counterV2Slice = createSlice({
  name: "counterV2",
  initialState: {
    result: 0,
  },
  reducers: {
    add: (state, action) => {
      state.result += action.payload;
    },
    subtract: (state, action) => {
      state.result -= action.payload;
    },
    multiply: (state, action) => {
      state.result *= action.payload;
    },
    divide: (state, action) => {
      state.result /= action.payload;
    },
  },
});

/* export const { add } = counterV2Slice.actions;
export const { multiply } = counterV2Slice.actions;
export const { subtract } = counterV2Slice.actions;
export const { divide } = counterV2Slice.actions; */

export const { add, multiply, divide, subtract } = counterV2Slice.actions;

export default counterV2Slice.reducer;

/* const initialStateV2 = {
  result: 0,
};

function addNum(num) {
  initialStateV2.result += num;
} */
