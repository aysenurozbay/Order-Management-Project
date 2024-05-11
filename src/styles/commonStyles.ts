import { StyleSheet } from 'react-native';
import colors from '../utils/colors';
import { borderRadius, marginConsts, paddingConsts } from '../utils/consts';

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
    button: {
        width: '100%',
        backgroundColor: colors.errorSecondary,
        borderRadius: borderRadius.large,
        padding: paddingConsts.small,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: marginConsts.medium,
    },
});
