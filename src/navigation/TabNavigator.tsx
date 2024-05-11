import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import Header from '../components/Header/Header';
import OnTheWayOrdersScreen from '../screens/OnTheWayOrdersScreen/OnTheWayOrdersScreen';
import PendingOrdersScreen from '../screens/PendingOrdersScreen/PendingOrdersScreen';
import colors from '../utils/colors';
import { TabParams } from './types/NavigationParams';

const Tab = createMaterialTopTabNavigator<TabParams>();

const TabNavigator = () => {
    return (
        <>
            <Header />
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: colors.black,
                    tabBarInactiveTintColor: colors.notActiveTab,
                    tabBarIndicatorStyle: { backgroundColor: colors.black },
                    tabBarStyle: { backgroundColor: 'transparent' },
                }}>
                <Tab.Screen
                    name="PendingOrders"
                    component={PendingOrdersScreen}
                    options={{ title: 'Bekleyen Siparisler' }}
                />
                <Tab.Screen
                    name="OnTheWayOrders"
                    component={OnTheWayOrdersScreen}
                    options={{ title: 'Yoldaki Siparisler' }}
                />
            </Tab.Navigator>
        </>
    );
};

export default TabNavigator;
