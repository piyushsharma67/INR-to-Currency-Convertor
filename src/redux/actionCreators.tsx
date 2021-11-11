import { Dispatch } from "redux"
import { ACTION_TYPES } from "../redux/actionTypes/actionTypes"
import { Action } from "../redux/action"
import React from 'react'
import { Alert } from "react-native"
import { setInitialCurrencyValue ,setCurrencyArr,setSelectedCurr,setFinalCurrency,setLoadedFalse,setSelectedCurrencyNil,setDefaultState} from "./reducer/reducer"
import { AppDispatch } from "."

export const setInitialValue = (amount: number) => {
    
    return (dispatch: AppDispatch) => {
        console.log("hello2")
        dispatch(setInitialCurrencyValue(amount))
    }
}

export const setCurrencyArray = (amount: string[]) => {
   
    return (dispatch: AppDispatch) => {
        dispatch(setCurrencyArr(amount))
    }
}

export const fetchCurrency=()=>{
    return (dispatch:AppDispatch)=>{
        return fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json`,{
            method:'get',
            headers:new Headers({'X-Custom-Header': 'foobar', "Content-Type": "application/json"}),
            })
            .then((response) => 
            response.json())
            .then((json)=>{
                var result = Object.keys(json).slice(0,json.length).map(key => (key));
                dispatch(setCurrencyArr(result))
            })
            .catch((err) => {
                if (err.TypeError==="Network request failed"){
                    Alert.alert("Error Occured","Network error")
                }
            }
        );
    } 

}

export const setSelectedCurrency = (currency: string[]) => {
    
    return (dispatch: AppDispatch) => {
        dispatch(setSelectedCurr(currency))
    }
}

interface objectmodel{
    initial:string,
    final:string[],
    value:number
}

export const fetchCurrencyValue=(prop:objectmodel)=>{
   
    return (dispatch:AppDispatch)=>{
        for(let i=0;i<prop.final.length;i++){
            
            fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${prop.initial}/${prop.final[i]}.json`,{
            method:'get',
            headers:new Headers({'X-Custom-Header': 'foobar', "Content-Type": "application/json"}),
            })
            .then((response) => 
            response.json())
            .then((json)=>{
                let key=prop.final[i].toUpperCase()
               
             let val={[key]:(json[prop.final[i]]*prop.value).toFixed(2)}
            
                dispatch(setFinalCurrency(val))
            })
            .catch((err) => {
                if (err.TypeError==="Network request failed"){
                    Alert.alert("Error Occured","Network error")
                }
            }
        );
        }
    } 

}

export const setLoaderFalse = () => {
    
    return (dispatch: AppDispatch) => {
        dispatch(setLoadedFalse())
    }
}

export const setSelectedCurrenciesListNil = () => {
    
    return (dispatch: AppDispatch) => {
        dispatch(setSelectedCurrencyNil())
    }
}

export const setDefault= () => {
    
    return (dispatch: AppDispatch) => {
        
        dispatch(setDefaultState())
    }
}



