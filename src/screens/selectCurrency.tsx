import { useFocusEffect } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    FlatList,
    Dimensions,
    TouchableOpacity,
    StyleSheet,
    Alert
} from 'react-native'
import { useDispatch,useSelector } from 'react-redux'
import { fetchCurrency,setSelectedCurrency,setSelectedCurrenciesListNil } from '../redux/actionCreators'
import {RootState} from '../redux/index'
const {width}=Dimensions.get("window")

interface OnboardingProps {
    navigation: any;
  }

const screen2=({navigation}:OnboardingProps)=>{

    const dispatch=useDispatch()
    useFocusEffect(
        React.useCallback(()=>{
            
            dispatch(setSelectedCurrenciesListNil())
            dispatch(fetchCurrency())
        },[])
    )

    function checkIfMinimumItemsSelected(){
      
        if(currencies.length>=3){
            dispatch(setSelectedCurrency(currencies))
            setCurrencies([])
            // navigation.navigate("CONVERTED VALUE")
        }else{
            Alert.alert("enter 3 or more currencies")
        }
         
    }

    const [currencies,setCurrencies]=useState<string[]>([])
    const state=useSelector((state:RootState)=>state.reducer)


    return (
        <View style={{justifyContent:'center',alignItems:'center',width:width,flex:1}}> 
            <Text style={{marginVertical:20,fontSize:19}}>Select the Currency</Text>
            <FlatList 
            data={state.currencyList}
            keyExtractor={(item:any,index:number)=>index+""}
            numColumns={4}
            showsVerticalScrollIndicator={false}
            // horizontal
            renderItem={({item})=>{
               
                return (
                    <TouchableOpacity style={style.container} onPress={()=>{
                        currencies.push(item)
                    }}>
                        <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>{item.toUpperCase()}</Text>
                    </TouchableOpacity>
                )
            }}
            />
            <TouchableOpacity style={style.button} onPress={()=>checkIfMinimumItemsSelected()}>
                <Text style={{color:'white'}}>Submitt</Text>
            </TouchableOpacity>
        </View>
    )
}

const style=StyleSheet.create({
    container:{
        width:50,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        marginHorizontal:10,
        marginVertical:5,
        backgroundColor:'blue'
    },
    button:{
        backgroundColor:'purple',
        width:80,
        height:40,
        justifyContent:'center',
        alignItems:'center',marginVertical:20
    }
})

export default screen2