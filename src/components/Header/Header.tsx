import React from 'react';
import { View } from 'react-native';
import { styles } from './Header.styles';
import HeaderCartButton from './buttons/HeaderCartButton';
import HeaderHistoryButton from './buttons/HeaderHistoryButton';

const Header = () => {
    return (
        <View style={styles.container}>
            <HeaderHistoryButton />
            <HeaderCartButton />
        </View>
    );
};

export default Header;
