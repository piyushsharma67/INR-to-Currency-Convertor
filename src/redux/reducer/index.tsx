import { combineReducers } from "redux";
import Reducer from "./reducer"


const reducers = combineReducers({
    reducer: Reducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>