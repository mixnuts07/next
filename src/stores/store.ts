import { configureStore } from "@reduxjs/toolkit";
// reducerを設定(counterSlice.reducer)
import counterReducer from "./slice/counterSlice";

export const store = configureStore({
  reducer: {
    // このcounterはuseSelectorでアクセスするときに使う！！
    // Sliceの登録
    counter: counterReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
