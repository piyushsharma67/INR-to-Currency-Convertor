import { useFocusEffect } from '@react-navigation/core'
import React, { useEffect } from 'react'
import {
    View,
    Text,
    FlatList,
    Dimensions,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator
} from 'react-native'
import { useDispatch,useSelector } from 'react-redux'
import {fetchCurrencyValue,setLoaderFalse} from '../redux/actionCreators'
import {RootState} from '../redux/index'
const {width}=Dimensions.get("window")

const screen3=()=>{

    const dispatch=useDispatch()
    const state=useSelector((state:RootState)=>state.reducer)

    useFocusEffect(
        React.useCallback(()=>{
            dispatch(setLoaderFalse())
            dispatch(fetchCurrencyValue({initial:state.currency,final:state.finalCurrency,value:state.value}))
           
        },[])
    )
    
        if(!state.isLoaded){
            return (
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <ActivityIndicator size="large" color="green"/>
                </View>
            )
        }

    return (
        <View style={{justifyContent:'center',alignItems:'center',width:width,flex:1,flexDirection:'row'}}> 
            <Text style={style.text}>{state.finalCurrency.toUpperCase()}</Text>
            <Text style={style.text}>:</Text>
            <Text style={style.text}>{state.finalValue} {state.currency.toUpperCase()}</Text>
        </View>
    )
}

const style=StyleSheet.create({
    text:{
        fontSize:18,marginHorizontal:10
    }
})

export default screen3