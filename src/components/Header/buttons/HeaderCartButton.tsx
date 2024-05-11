import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import colors from '../../../utils/colors';
import { styles } from './HeaderCartButton.styles';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import BasketIcon from '../../../assets/icons/BasketIcon';
import { AppParams } from '../../../navigation/types/NavigationParams';
import { selectNumberOfItem } from '../../../store/orderSlicer';

const HeaderCartButton = () => {
    const navigation: NativeStackNavigationProp<AppParams> = useNavigation();

    const handleOnPress = () => {
        navigation.navigate('Cart');
    };

    const numberOfItems = useSelector(selectNumberOfItem);

    return (
        <TouchableOpacity style={styles.container} onPress={handleOnPress}>
            <BasketIcon fill={colors.white} size={20} />
            <Text style={styles.itemText}> {numberOfItems}</Text>
        </TouchableOpacity>
    );
};

export default HeaderCartButton;
