  
import { ACTION_TYPES } from '../redux/actionTypes/actionTypes'

interface SetInitialValueAction {
    type: ACTION_TYPES.SET_INITIAL_CURRENCY_VALUE,
    payload: number
}
interface SetCurrencyArray {
    type: ACTION_TYPES.SET_CURRENCY_ARRAY,
    payload: string[]
}

interface SetSelectedCurrency {
    type: ACTION_TYPES.SET_SELECTED_CURRENCY,
    payload: string
}

interface SetFinalCurrency {
    type: ACTION_TYPES.SET_FINAL_CURRENCY,
    payload: number
}

interface SetLoaded {
    type: ACTION_TYPES.SET_LOADED_FALSE,
}



export type Action = SetInitialValueAction | SetCurrencyArray | SetSelectedCurrency | SetFinalCurrency | SetLoaded