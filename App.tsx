// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home'
import Screen2 from './src/screens/selectCurrency';
import Screen3 from './src/screens/convertedCurrencyScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
  <Provider store={store}>
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="INR TO CURRENCIES CONVERTOR" component={HomeScreen} />
        <Stack.Screen name="CURRENCY LIST" component={Screen2} />
        <Stack.Screen name="CONVERTED VALUE" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
  );
}

export default App;