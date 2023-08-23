import {StyleSheet} from "react-native";

import {colors} from '../../utils/colors'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        padding: 8,
        marginLeft: 20,
        marginRight: 20,
        paddingVertical: 20,
        paddingHorizontal: 8,
        borderRadius: 14,
        width: '90%',
        //flex: 1


    },
    title: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    }
})