import { Icon } from '@ant-design/react-native';
import { useNavigation } from '@react-navigation/native';
import {
    NativeStackNavigationProp,
    createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import CartScreen from '../screens/CartScreen/CartScreen';
import TabNavigator from './TabNavigator';
import { AppParams } from './types/NavigationParams';
import BasketHistoryScreen from '../screens/BasketHistory/BasketHistoryScreen';
import colors from '../utils/colors';

const Stack = createNativeStackNavigator<AppParams>();

const GoBackComponent = () => {
    const navigation: NativeStackNavigationProp<AppParams> = useNavigation();

    const goBackHandler = () => navigation.goBack();

    return (
        <TouchableOpacity onPress={goBackHandler}>
            <Icon name="arrow-left" size="md" color={colors.white} />
        </TouchableOpacity>
    );
};

const AppNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTransparent: true,
                contentStyle: { backgroundColor: 'transparent' },
                headerTintColor: colors.white,
            }}>
            <Stack.Screen
                name="Orders"
                component={TabNavigator}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    headerLeft: () => <GoBackComponent />,
                    title: 'Siparisler',
                    animationTypeForReplace: 'push',
                }}
            />
            <Stack.Screen
                name="History"
                component={BasketHistoryScreen}
                options={{
                    headerLeft: () => <GoBackComponent />,
                    title: 'Gecmis',
                    animation: 'slide_from_left',
                    animationTypeForReplace: 'push',
                }}
            />
        </Stack.Navigator>
    );
};

export default AppNavigator;
