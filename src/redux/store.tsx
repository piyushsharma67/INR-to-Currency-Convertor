import { applyMiddleware, createStore, Store } from "redux";
import reducers from './reducer/index'
import thunk from "redux-thunk"
import { configureStore } from "@reduxjs/toolkit";
import reducerSlice  from "./reducer/reducer";
// export const store = createStore(
//   reducers,
//   {},
//   applyMiddleware(thunk)
// )

export const store=configureStore({
  reducer:{
    Reducer:reducerSlice,
  },
  middleware:[thunk]
})

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch