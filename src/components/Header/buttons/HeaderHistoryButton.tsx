import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { AppParams } from '../../../navigation/types/NavigationParams';

import colors from '../../../utils/colors';

import { selectNumberOfItem } from '../../../store/orderSlicer';

import HistoryIcon from '../../../assets/icons/HistoryIcon';
import { styles } from './HeaderHistoryButton.styles';

const HeaderHistoryButton = () => {
    const navigation: NativeStackNavigationProp<AppParams> = useNavigation();

    const handleOnPress = () => {
        navigation.navigate('History');
    };

    return (
        <TouchableOpacity style={styles.container} onPress={handleOnPress}>
            <HistoryIcon fill={colors.white} size={20} />
        </TouchableOpacity>
    );
};

export default HeaderHistoryButton;
