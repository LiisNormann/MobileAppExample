import react from "react";
import {Pressable, Text} from "react-native";

import {styles} from './styles';

const Button = ({title, onPress}) => {
    const handlePress = () => {
        console.log('button is clicked')
    }

    return (
        <Pressable hitSlop={20} onPress={handlePress} style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    )
}
export default Button