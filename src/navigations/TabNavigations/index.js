import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../../screens/Home';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          let iconName;

          if (route.name === 'Payments') {
            iconName = focused ? 'journal' : 'journal-outline';
          } else if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Wallet') {
            iconName = focused ? 'wallet' : 'wallet-outline';
          }

          return (
            <Icon
              name={iconName}
              size={20}
              color={focused ? '#1B1C1F' : '#7F94A4'}
            />
          );
        },
        tabBarLabel: ({focused}) => {
          let label;

          if (route.name === 'Home') {
            label = 'Home';
          } else if (route.name === 'Payments') {
            label = 'Payments';
          } else if (route.name === 'Wallet') {
            label = 'Wallet';
          }

          return (
            <Text
              style={{
                color: focused ? '#1B1C1F' : '#7F94A4',
                fontSize: 12,
                fontWeight: '600',
              }}>
              {label}
            </Text>
          );
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Payments" component={Home} />
      <Tab.Screen name="Wallet" component={Home} />
    </Tab.Navigator>
  );
};
export default TabNavigator;
