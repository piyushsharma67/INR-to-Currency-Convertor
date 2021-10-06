import * as React from 'react';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation from './src/navigation/stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
  <Provider store={store}>
    <NavigationContainer >
      <Navigation />
    </NavigationContainer>
  </Provider>
  );
}

export default App;