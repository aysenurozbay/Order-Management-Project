import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import HeaderCartButton from '../components/Header/HeaderCartButton';
import OnTheWayOrdersScreen from '../screens/OnTheWayOrdersScreen/OnTheWayOrdersScreen';
import PendingOrdersScreen from '../screens/PendingOrdersScreen/PendingOrdersScreen';
import colors from '../utils/colors';
import { TabParams } from './types/NavigationParams';

const Tab = createMaterialTopTabNavigator<TabParams>();

const TabNavigator = () => {
    return (
        <>
            <HeaderCartButton />
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: colors.black,
                    tabBarInactiveTintColor: colors.notActiveTab,
                    tabBarIndicatorStyle: { backgroundColor: colors.black },
                    tabBarStyle: { backgroundColor: 'transparent' },
                }}>
                <Tab.Screen name="PendingOrders" component={PendingOrdersScreen} />
                <Tab.Screen name="OnTheWayOrders" component={OnTheWayOrdersScreen} />
            </Tab.Navigator>
        </>
    );
};

export default TabNavigator;
