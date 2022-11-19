import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}
const initialState: CounterState = {
  // stateの初期値
  value: 0,
};
export const counterSlice = createSlice({
  // sliceの名前
  name: "counter",
  initialState,
  // reducers .. stateをどう更新するか？（ロジック）
  // Action Creatorはreducersが作成されると自動で作成される
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// View(Component)で使用するためにactions(reducers)をexportする必要がある
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// reducerはstoreで使う
export default counterSlice.reducer;
