import { useFocusEffect } from '@react-navigation/core'
import React, { useEffect } from 'react'
import {
    View,
    Text,
    FlatList,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import { BackHandler } from 'react-native'
import { useDispatch,useSelector } from 'react-redux'
import Navigation from '../navigation/stack'
import {fetchCurrencyValue,setLoaderFalse,setDefault} from '../redux/actionCreators'
import {RootState} from '../redux/index'
import { useNavigation } from '@react-navigation/native'
const {width}=Dimensions.get("window")

const screen3=()=>{
    const navigation=useNavigation()
    const dispatch=useDispatch()
    const state=useSelector((state:RootState)=>state.Reducer)
   
    useFocusEffect(
        React.useCallback(()=>{
            dispatch(setLoaderFalse())
            dispatch(fetchCurrencyValue({initial:state.currency,final:state.finalCurrency,value:state.value}))

            const onBackPress = () : any => {
                dispatch(setDefault())
            };
            BackHandler.addEventListener('hardwareBackPress', onBackPress);
            return () =>
                BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        },[])
    )

    return (
        <View style={{justifyContent:'center',alignItems:'center',width:width,flex:1}}> 
            <Text style={{fontSize:18,flex:0.2,justifyContent:'center',alignItems:'center'}}>INR value to selected currency are:</Text>
            <View style={{flex:0.6}}>
                <FlatList 
                data={state.finalValue}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item,index)=>index+""}
                renderItem={({item})=>{
                    
                    let key=Object.keys(item)
                    let val=Object.values(item)
                        return (
                            <View style={{flexDirection:'row',marginVertical:10}}>
                                <Text style={{fontSize:18,color:"blue",}}>{key}    : </Text>
                                <Text style={{fontSize:18,color:"blue"}}>{val}</Text>
                            </View>
                        )
                }}
                />
            </View>
          <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={()=>dispatch(setDefault())} style={style.button}>
                <Text style={{color:'white'}}>GoBack</Text>
            </TouchableOpacity>
          </View>
        </View>
    )
}

const style=StyleSheet.create({
    text:{
        fontSize:18,marginHorizontal:10
    },
    button:{
    
        width:70,
        height:20,
        backgroundColor:'purple',
        alignItems:'center',
        justifyContent:'center'
    }
})

export default screen3