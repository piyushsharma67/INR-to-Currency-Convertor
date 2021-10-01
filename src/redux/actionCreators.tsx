import { Dispatch } from "redux"
import { ACTION_TYPES } from "../redux/actionTypes/actionTypes"
import { Action } from "../redux/action"
import React from 'react'
import { Alert } from "react-native"

export const setInitialValue = (amount: number) => {
    console.log(amount)
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ACTION_TYPES.SET_INITIAL_CURRENCY_VALUE,
            payload: amount
        })
    }
}

export const setCurrencyArray = (amount: string[]) => {
    console.log(amount)
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ACTION_TYPES.SET_CURRENCY_ARRAY,
            payload: amount
        })
    }
}

export const fetchCurrency=()=>{
    return (dispatch:Dispatch<Action>)=>{
        return fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json`,{
            method:'get',
            headers:new Headers({'X-Custom-Header': 'foobar', "Content-Type": "application/json"}),
            })
            .then((response) => 
            response.json())
            .then((json)=>{
                var result = Object.keys(json).slice(0,json.length).map(key => (key));
                dispatch({
                    type: ACTION_TYPES.SET_CURRENCY_ARRAY,
                    payload: result
                })
            })
            .catch((err) => {
                if (err.TypeError==="Network request failed"){
                    Alert.alert("Error Occured","Network error")
                }
            }
        );
    } 

}

export const setSelectedCurrency = (currency: string) => {
    
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ACTION_TYPES.SET_SELECTED_CURRENCY,
            payload: currency
        })
    }
}

interface objectmodel{
    initial:string,
    final:string,
    value:number
}

export const fetchCurrencyValue=(prop:objectmodel)=>{
    console.log(prop.initial,prop.final)
    console.log("in fetch value")
    return (dispatch:Dispatch<Action>)=>{
        return fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${prop.initial}/${prop.final}.json`,{
            method:'get',
            headers:new Headers({'X-Custom-Header': 'foobar', "Content-Type": "application/json"}),
            })
            .then((response) => 
            response.json())
            .then((json)=>{
                var result = json[prop.final]
              
                dispatch({
                    type: ACTION_TYPES.SET_FINAL_CURRENCY,
                    payload: result*prop.value
                })
            })
            .catch((err) => {
                if (err.TypeError==="Network request failed"){
                    Alert.alert("Error Occured","Network error")
                }
            }
        );
    } 

}

export const setLoaderFalse = () => {
    
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ACTION_TYPES.SET_LOADED_FALSE,
        })
    }
}



