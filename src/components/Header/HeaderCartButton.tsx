import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { Icon } from '@ant-design/react-native';
import colors from '../../utils/colors';
import { styles } from './HeaderCartButton.styles';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { AppParams } from '../../navigation/types/NavigationParams';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { selectNumberOfItem } from '../../store/orderSlicer';

const HeaderCartButton = () => {
    const navigation: NativeStackNavigationProp<AppParams> = useNavigation();

    const handleOnPress = () => {
        navigation.navigate('Cart');
    };

    const numberOfItems = useSelector(selectNumberOfItem);

    return (
        <TouchableOpacity style={styles.container} onPress={handleOnPress}>
            <Icon name="shopping" size="md" color={colors.white} />
            <Text style={styles.itemText}> {numberOfItems}</Text>
        </TouchableOpacity>
    );
};

export default HeaderCartButton;
