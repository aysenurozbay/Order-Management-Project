import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import { borderRadius, marginConsts, paddingConsts } from '../../utils/consts';

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: colors.white,
        borderRadius: 20,
        padding: 35,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    closeIcon: {
        position: 'absolute',
        right: 0,
        top: -15,
        borderRadius: borderRadius.large,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.15,
        shadowRadius: 1,
        backgroundColor: colors.white,
        padding: paddingConsts.small,
    },
    assignCourier: {
        width: '100%',
        backgroundColor: colors.secondary200,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: marginConsts.medium,
        padding: paddingConsts.small,
        borderRadius: borderRadius.large,
    },
    errorText: {
        color: colors.errorPrimary,
        fontSize: 15,
        fontWeight: '600',
        paddingVertical: paddingConsts.small,
    },
});
