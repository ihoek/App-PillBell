import React from 'react'
import { StatusBar } from 'expo-status-bar'

import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './navigation/StackNavigator'
import { ImageProvider } from './pages/ImageContext';
import { ProductProvider } from './pages/ProductContext';

export default function App() {

  console.disableYellowBox = true;

  return ( 
    <ImageProvider>
      <ProductProvider>
        <NavigationContainer>
          <StatusBar style="black" />
          <StackNavigator/>
        </NavigationContainer>
      </ProductProvider>
    </ImageProvider>
  );
}