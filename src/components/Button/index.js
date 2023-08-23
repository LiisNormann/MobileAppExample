import React from "react";
import {Pressable, Text} from "react-native";

import {styles} from './styles';

const Button = ({title, onPress, style}) => {
    const handlePress = () => {
        console.log('button is clicked')
    }

    return (
        <Pressable hitSlop={20} onPress={onPress} style={[styles.container, style]}>
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    )
}
export default Button