import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux'
import { RootState } from '../redux';
import HomeScreen from '../screens/home';
import Screen2 from '../screens/selectCurrency';
import Screen3 from '../screens/convertedCurrencyScreen';
const Stack=createNativeStackNavigator()

const Navigation=()=>{
    const state=useSelector((state:RootState)=>state.reducer)

    return (
       <Stack.Navigator>
           {(state.initialValueSet==false && state.setIsCurrencySelected==false) && <Stack.Screen name="INR TO CURRENCIES CONVERTOR" component={HomeScreen} />}
           {(state.initialValueSet==true && state.setIsCurrencySelected==false) && <Stack.Screen name="CURRENCY LIST" component={Screen2} />}
           {(state.initialValueSet==true && state.setIsCurrencySelected==true) && <Stack.Screen name="CONVERTED CURRENCY" component={Screen3} />}
       </Stack.Navigator>
    )
}

export default Navigation