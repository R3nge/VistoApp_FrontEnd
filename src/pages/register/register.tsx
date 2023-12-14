// RegisterForm.tsx
import React from "react";
import { View, Text } from "react-native";
import LoginButton from "../../components/button";
import FormInput from "../../components/input";
import RegisterButton from "../../components/textButton";
import styles from './register.styles';

export default function RegisterForm({ navigation }: { navigation: any }) {
    return (
        <View style={styles.containerForm}>
            <View style={styles.formTitle}>
                <Text style={styles.title}>
                    Create an Account
                </Text>
                <Text style={styles.subtitle}>
                    Enter your details to continue
                </Text>
            </View>
            <View style={styles.form}>
                <FormInput
                    placeholder="Enter your name"
                    secureTextEntry={false}
                    onChangeText={(value: string) => { console.log(value) }}
                />
                <FormInput
                    placeholder="Enter your email"
                    secureTextEntry={false}
                    onChangeText={(value: string) => { console.log(value) }}
                />
                <FormInput
                    placeholder="Enter your phone number"
                    secureTextEntry={false}
                    onChangeText={(value: string) => { console.log(value) }}
                />
                <FormInput
                    placeholder="Enter your password"
                    secureTextEntry={true}
                    onChangeText={(value: string) => { console.log(value) }}
                />
                <LoginButton
                    textBtn="Register"
                    onPress={() => navigation.navigate('Tabs')}
                />
                <RegisterButton
                    text="Already have an account?"
                    textBtn="Login"
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
        </View>
    );
}
