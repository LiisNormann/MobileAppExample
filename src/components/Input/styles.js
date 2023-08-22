import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create ({

    container: {
        marginLeft: 10,
        marginRight: 10,
        padding: 5
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1
    },
    eye: {
        width: 24,
        height: 24,
        marginHorizontal: 16
    },
    label: {
        //marginBottom: 8,
        //paddingLeft: 24,
        marginBottom: 8,
        color: colors.blue,
        fontWeight: '500'
    }
})