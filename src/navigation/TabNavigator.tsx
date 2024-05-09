import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import OnTheWayOrdersScreen from '../screens/OnTheWayOrdersScreen/OnTheWayOrdersScreen';
import PendingOrdersScreen from '../screens/PendingOrdersScreen/PendingOrdersScreen';
import { TabParams } from './types/NavigationParams';

const Tab = createMaterialTopTabNavigator<TabParams>();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="PendingOrders" component={PendingOrdersScreen} />
            <Tab.Screen name="OnTheWayOrders" component={OnTheWayOrdersScreen} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
