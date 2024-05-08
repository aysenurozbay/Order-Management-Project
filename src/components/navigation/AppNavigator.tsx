import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {AppParams} from './types/NavigationParams';
import PendingOrdersScreen from '../screens/PendingOrdersScreen/PendingOrdersScreen';
import OnTheWayOrdersScreen from '../screens/OnTheWayOrdersScreen/OnTheWayOrdersScreen';

const Tab = createMaterialTopTabNavigator<AppParams>();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="PendingOrders" component={PendingOrdersScreen} />
      <Tab.Screen name="OnTheWayOrders" component={OnTheWayOrdersScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
