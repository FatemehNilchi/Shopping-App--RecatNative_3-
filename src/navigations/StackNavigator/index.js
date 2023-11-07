import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FirstPageSlider from './../../pages/FirstPageSlider';
import SignUp from '../../pages/SignUp';
import ProductScannerPage from '../../pages/ProductScannerPage';
import ProductPage from '../../pages/ProductPage';
import ReviewPurchase from '../../pages/ReviewPurchase';
import Invoice from '../../pages/Invoice';
import Main from '../../pages/Main';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="FirstPageSlider" component={FirstPageSlider} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ProductScannerPage" component={ProductScannerPage} />
      <Stack.Screen name="ProductPage" component={ProductPage} />
      <Stack.Screen name="ReviewPurchase" component={ReviewPurchase} />
      <Stack.Screen name="Invoice" component={Invoice} />
      <Stack.Screen name="Main" component={Main} />

    </Stack.Navigator>
  );
};
export default StackNavigator;
