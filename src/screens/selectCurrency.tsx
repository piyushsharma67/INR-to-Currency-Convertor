import React, { useEffect } from 'react'
import {
    View,
    Text,
    FlatList,
    Dimensions,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { useDispatch,useSelector } from 'react-redux'
import { fetchCurrency,setSelectedCurrency } from '../redux/actionCreators'
import {RootState} from '../redux/index'
const {width}=Dimensions.get("window")

interface OnboardingProps {
    navigation: any;
  }

const screen2=({navigation}:OnboardingProps)=>{

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchCurrency())
    },[])

    const state=useSelector((state:RootState)=>state.reducer)
    console.log(state)

    return (
        <View style={{justifyContent:'center',alignItems:'center',width:width,flex:1}}> 
            <Text>Select the currency</Text>
            <FlatList 
            data={state.currencyList}
            keyExtractor={(item:any,index:number)=>index+""}
            numColumns={4}
            // horizontal
            renderItem={({item})=>{
                console.log("items",item)
                return (
                    <TouchableOpacity style={style.container} onPress={()=>{
                        dispatch(setSelectedCurrency(item))
                        navigation.navigate("CONVERTED VALUE")
                    }}>
                        <Text style={{color:'black',fontSize:16}}>{item.toUpperCase()}</Text>
                    </TouchableOpacity>
                )
            }}
            />
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
        backgroundColor:'yellow'
    }
})

export default screen2