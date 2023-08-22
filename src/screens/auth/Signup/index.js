import React, { useState } from "react";
import AuthHeader from "../../../components/AuthHeader";
import { View, Text } from "react-native";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import { styles } from "./styles";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";


const Signup = () => {
    const[checked, setChecked]= useState(false)

    return (
        <View style={styles.container}>
            <AuthHeader title="Sign Up" />
            <Input label="Name" placeholder="Marek Tammeväli" />
            <Input label="Email" placeholder="marek@gmail.com" />
            <Input isPassword label="Password" placeholder="**********" />
            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked}/>
                <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms </Text> 
                 & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
            </View>
            <Button style={styles.button} title="Sign In" />
            <Separator text="or sign up with" />
            <GoogleLogin />
            <Text style={styles.footerText}>Already have an account? 
                <Text style={styles.footerLink}> Sign In</Text>
            </Text>
        </View>
    )
}
export default Signup