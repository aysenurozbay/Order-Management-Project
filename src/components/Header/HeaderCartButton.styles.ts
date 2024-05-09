import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemText: {
        position: 'absolute',
        top: -5,
        right: -3,
        fontSize: 15,
        color: colors.errorSecondary,
    },
});
