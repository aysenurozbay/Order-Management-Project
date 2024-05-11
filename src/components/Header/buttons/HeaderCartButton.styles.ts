import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';
import { marginConsts } from '../../../utils/consts';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginVertical: marginConsts.medium,
        marginHorizontal: marginConsts.large,
    },
    itemText: {
        position: 'absolute',
        top: -10,
        right: -8,
        fontSize: 15,
        color: colors.white,
    },
});
