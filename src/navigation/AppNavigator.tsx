import React from 'react';
import {
    NativeStackNavigationProp,
    createNativeStackNavigator,
} from '@react-navigation/native-stack';
import HeaderCartButton from '../components/Header/HeaderCartButton';
import CartScreen from '../screens/CartScreen/CartScreen';
import TabNavigator from './TabNavigator';
import { AppParams } from './types/NavigationParams';
import { Icon } from '@ant-design/react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator<AppParams>();

const GoBackComponent = () => {
    const navigation: NativeStackNavigationProp<AppParams> = useNavigation();

    const goBackHandler = () => navigation.goBack();

    return (
        <TouchableOpacity onPress={goBackHandler}>
            <Icon name="arrow-left" size="md" />
        </TouchableOpacity>
    );
};

const AppNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTransparent: true,
                contentStyle: { backgroundColor: 'transparent' },
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
                }}
            />
        </Stack.Navigator>
    );
};

export default AppNavigator;
