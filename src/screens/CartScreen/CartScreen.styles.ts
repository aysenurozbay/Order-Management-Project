import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import { borderRadius, marginConsts, paddingConsts } from '../../utils/consts';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    emptyLabel: {
        fontSize: 14,
        color: colors.gray500,
        fontWeight: '600',
        textAlign: 'center',
        padding: 20,
    },
    deliverButton: {
        backgroundColor: colors.secondary200,
        justifyContent: `center`,
        alignItems: 'center',
        padding: paddingConsts.medium,
        margin: marginConsts.medium,
        borderRadius: borderRadius.large,
    },
    deliverButtonLabel: {
        color: colors.white,
        fontSize: 16,
        fontWeight: '500',
    },
});
