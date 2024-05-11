import { StyleSheet } from 'react-native';
import colors from '../utils/colors';
import { paddingConsts } from '../utils/consts';

export const commonStyles = StyleSheet.create({
    flex: {
        flex: 1,
        paddingTop: paddingConsts.large,
    },
    buttonLabel: {
        color: colors.white,
        fontSize: 16,
        fontWeight: '500',
    },
});
