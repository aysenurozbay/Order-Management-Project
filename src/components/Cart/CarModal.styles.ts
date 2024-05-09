import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import { borderRadius, marginConsts, paddingConsts } from '../../utils/consts';

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: colors.white,
        borderRadius: 20,
        padding: 35,
        // alignItems: 'center',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
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
        width: `100%`,
        backgroundColor: colors.secondary200,
        alignSelf: 'center',
        marginVertical: marginConsts.medium,
        padding: paddingConsts.small,
        borderRadius: borderRadius.large,
    },
});
