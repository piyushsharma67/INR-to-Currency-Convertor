import { ACTION_TYPES } from '../actionTypes/actionTypes'
import { Action } from '../action'

interface state {
    currency :string,
    value:number,
    currencyList:string[],
    finalCurrency:string,
    finalValue:number,
    isLoaded:Boolean
}

const initialState : state= {
    currency:"inr",
    value:0,
    currencyList:[],
    finalCurrency:"",
    finalValue:0 ,
    isLoaded:false
};

const Reducer = (state: state = initialState, action: Action) => {
    switch (action.type){
        case ACTION_TYPES.SET_INITIAL_CURRENCY_VALUE:
            return {...state,value:action.payload}

        case ACTION_TYPES.SET_CURRENCY_ARRAY:
            return {...state,currencyList:action.payload}
        
        case ACTION_TYPES.SET_SELECTED_CURRENCY:
            return {...state,finalCurrency:action.payload}

        case ACTION_TYPES.SET_FINAL_CURRENCY:
            return {...state,finalValue:action.payload,isLoaded:true}

        case ACTION_TYPES.SET_LOADED_FALSE:
            return {...state,isLoaded:false}
            
        default:
            return state
    }
}

export default Reducer