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

