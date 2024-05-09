import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderCartButton from '../components/Header/HeaderCartButton';
import CartScreen from '../screens/CartScreen/CartScreen';
import TabNavigator from './TabNavigator';
import { AppParams } from './types/NavigationParams';

const Stack = createNativeStackNavigator<AppParams>();

const AppNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{}}>
            <Stack.Screen
                name="Orders"
                component={TabNavigator}
                options={{
                    headerRight: () => <HeaderCartButton />,
                    title: 'Siparisler',
                }}
            />
            <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
