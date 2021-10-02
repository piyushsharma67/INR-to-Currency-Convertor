import React,{useState} from 'react'
import {StyleSheet, Text,TextInput,View,Dimensions,TouchableOpacity, Alert} from 'react-native'
import { useDispatch,useSelector } from 'react-redux'
const {width,height}=Dimensions.get("window")
import { setInitialValue } from '../redux/actionCreators'
import {RootState} from '../redux/index'
import { useNavigation } from '@react-navigation/native';

interface OnboardingProps {
  navigation: any;
}

function HomeScreen({navigation}: OnboardingProps) {
  
  const [val,setVal]=useState<string>("")
  const dispatch=useDispatch()

  
  const state=useSelector((state:RootState)=>state.reducer)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,flexDirection:'column'}}>
        <View style={{alignItems: 'center', justifyContent: 'center' ,flexDirection:'row',borderWidth:1,padding:10}}>
          <TextInput 
            keyboardType="decimal-pad"
            onChangeText={(value:string)=>setVal(value)}
            defaultValue={val}
            placeholder="value"
            placeholderTextColor="grey"
            style={style.input}
          />
          <View style={style.currency}>
            <Text style={{fontSize:20,fontWeight:'bold',}}>INR</Text>
          </View>
        </View>
        <TouchableOpacity style={style.button} onPress={()=>{
          if (val==""){
            Alert.alert("Error","Enter the value")
          }
          else{
            dispatch(setInitialValue(parseInt(val,10)))
            setVal("")
            navigation.navigate("CURRENCY LIST")
          }
        }}>
          <Text style={{color:'white',fontWeight:'bold',fontSize:15}}>Submitt</Text>
        </TouchableOpacity>
      </View>
    );
  }

const style=StyleSheet.create({
  input:{
    width:width*0.3,
    height:height*0.06,
    paddingVertical:0,
    borderBottomWidth:1,
    fontSize:16,
    color:'black',

  },
  currency:{
    height:height*0.06,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:width*0.03
  },
  button:{
    width:width*0.2,
    height:height*0.04,
    backgroundColor:'purple',
    justifyContent:'center',
    alignItems:'center',
    marginTop:height*0.1
  }
})


export default HomeScreen
  