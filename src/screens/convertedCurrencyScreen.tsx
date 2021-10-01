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

    return (
        <View style={{justifyContent:'center',alignItems:'center',width:width,flex:1}}> 
            <Text style={{fontSize:18,flex:0.2,justifyContent:'center',alignItems:'center'}}>INR value to selected currency are:</Text>
            <View style={{flex:0.8}}>
                <FlatList 
                data={state.finalValue}
                keyExtractor={(item,index)=>index+""}
                renderItem={({item})=>{
                    
                    let key=Object.keys(item)
                    let val=Object.values(item)
                        return (
                            <View style={{flexDirection:'row',marginVertical:10}}>
                                <Text style={{fontSize:18,color:"blue",}}>{key}    :</Text>
                                <Text style={{fontSize:18,color:"blue"}}>{val} INR</Text>
                            </View>
                        )
                }}
                />
            </View>
        </View>
    )
}

const style=StyleSheet.create({
    text:{
        fontSize:18,marginHorizontal:10
    }
})

export default screen3