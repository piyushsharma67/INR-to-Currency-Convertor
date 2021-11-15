/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import App from '../App';
 import HomeScreen from '../src/screens/home'
 
 // Note: test renderer must be required after react-native.
 import renderer from 'react-test-renderer';
 
 test("HomeScreen",()=>{
     const snap=renderer.create(<HomeScreen navigation/>).toJSON()
     expect(snap).toMatchSnapshot()
 })