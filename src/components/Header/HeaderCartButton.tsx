import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { Icon } from '@ant-design/react-native';
import colors from '../../utils/colors';
import { styles } from './HeaderCartButton.styles';

const HeaderCartButton = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Icon name="shopping" size="md" color={colors.black} />
            <Text style={styles.itemText}> 1</Text>
        </TouchableOpacity>
    );
};

export default HeaderCartButton;
