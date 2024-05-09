import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import { borderRadius, marginConsts, paddingConsts } from '../../utils/consts';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bgColor,
        borderRadius: borderRadius.medium,
        marginHorizontal: marginConsts.medium,
        marginVertical: marginConsts.small,
        padding: paddingConsts.small,
    },
    foodNameContainer: {
        flexDirection: 'row',
    },
    foodName: {
        fontWeight: '600',
        fontSize: 14,
        color: colors.gray100,
        paddingRight: paddingConsts.tiny,
    },
    address: {
        paddingVertical: paddingConsts.tiny,
        fontSize: 12,
    },
    statusText: {
        marginVertical: paddingConsts.small,
        color: colors.orange,
        fontWeight: '600',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cartButton: {
        backgroundColor: colors.green,
        borderRadius: borderRadius.small,
        padding: paddingConsts.small,
    },
    cartButtonTitle: {
        color: colors.gray300,
        fontWeight: '500',
        fontSize: 12,
    },
    detailText: {
        textAlign: 'right',
        paddingHorizontal: paddingConsts.tiny,
        textDecorationLine: 'underline',
        fontSize: 12,
    },
});
