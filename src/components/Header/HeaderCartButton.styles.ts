import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import { paddingConsts } from '../../utils/consts';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end',
        margin: paddingConsts.small,
    },
    itemText: {
        position: 'absolute',
        top: -5,
        right: -3,
        fontSize: 15,
        color: colors.white,
    },
});
