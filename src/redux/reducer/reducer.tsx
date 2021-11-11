import { ACTION_TYPES } from '../actionTypes/actionTypes'
import { Action } from '../action'
import {createSlice,PayloadAction} from '@reduxjs/toolkit'

interface state {
    currency :string,
    value:number,
    currencyList:string[],
    finalCurrency:string[],
    finalValue:any[],
    isLoaded:Boolean,
    initialValueSet:Boolean,
    setIsCurrencySelected:Boolean
}

const initialState : state= {
    currency:"inr",
    value:0,
    currencyList:[],
    finalCurrency:[],
    finalValue:[] ,
    isLoaded:false,
    initialValueSet:false,
    setIsCurrencySelected:false
};

export const reducerSlice =createSlice({
    name:"reducer",
    initialState,
    reducers:{
        setInitialCurrencyValue:(state,action:PayloadAction<number>)=>{
           
            state.value=action.payload
            state.initialValueSet=true
        },
        setCurrencyArr:(state,action:PayloadAction<string[]>)=>{
            action.payload.map((item)=>{
                state.currencyList.push(item)
            })
        },
        setSelectedCurr:(state,action:PayloadAction<string[]>)=>{
            state.finalCurrency=action.payload,
            state.setIsCurrencySelected=true
        },
        setFinalCurrency:(state,action:PayloadAction<any>)=>{            
            state.finalValue.push(action.payload),
            state.isLoaded=true
        },
        setLoadedFalse:(state)=>{
            state.isLoaded=false
        },
        setSelectedCurrencyNil:(state)=>{
            state.currencyList=[],
            state.finalValue=[]
        },
        setDefaultState:(state)=>{
            console.log("default pressed")
            Object.assign(state,initialState)
        }
    }

})


export const {
    setInitialCurrencyValue,
    setCurrencyArr,
    setSelectedCurr,
    setFinalCurrency,
    setLoadedFalse,
    setSelectedCurrencyNil,
    setDefaultState} = reducerSlice.actions

export default reducerSlice.reducer


// const Reducer = (state: state = initialState, action: Action) => {
//     switch (action.type){
//         case ACTION_TYPES.SET_INITIAL_CURRENCY_VALUE:
//             return {...state,value:action.payload,initialValueSet:true}

//         case ACTION_TYPES.SET_CURRENCY_ARRAY:
//             return {...state,currencyList:action.payload}
        
//         case ACTION_TYPES.SET_SELECTED_CURRENCY:
//             return {...state,finalCurrency:action.payload,setIsCurrencySelected:true}

//         case ACTION_TYPES.SET_FINAL_CURRENCY:
//             return {...state,finalValue:[...state.finalValue,action.payload],isLoaded:true}

//         case ACTION_TYPES.SET_LOADED_FALSE:
//             return {...state,isLoaded:false}

//         case ACTION_TYPES.SET_SELECTED_CURRENCIES_NIL:
//             return {...state,currencyList:[],finalValue:[]}
        
//         case ACTION_TYPES.SET_DEFAULT:
//             return {...initialState}
//         default:
//             return state
//     }
// }

