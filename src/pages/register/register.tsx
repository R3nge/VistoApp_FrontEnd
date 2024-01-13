// RegisterForm.tsx
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginButton from '../../components/mainButton';
import FormInput from '../../components/formInput';
import { showMessage } from 'react-native-flash-message';
import createUserControler from './register.controller';
import styles from './register.styles';
import RegisterButton from '../../components/textButton';

export default function RegisterForm({ navigation }: { navigation: any }) {
    const [emailValue, setEmailValue] = useState('');
    const [passWordValue, setPassWordValue] = useState('');
    const [confirmPassWordValue, setConfirmPassWordValue] = useState('');
    const [fullNameValue, setFullNameValue] = useState('');
    const [birthDateValue, setbirthDateValue] = useState('');
    const [typeValue, setTypeValue] = useState('');

    const notify = (errorMessage: string) => {
        showMessage({
            message: errorMessage,
            type: 'danger',
            duration: 5000,
            position: 'top',
        });
    };

    const handleMailChange = (value: string) => {
        setEmailValue(value);
    };
    const handlePasswordChange = (value: string) => {
        setPassWordValue(value);
    };
    const handleConfirmPasswordChange = (value: string) => {
        setConfirmPassWordValue(value);
    };
    const handleFullNameChange = (value: string) => {
        setFullNameValue(value);
    };
    const handleDataChange = (value: string) => {
        setbirthDateValue(value);
    };
    const handleTypeChange = (value: string) => {
        setTypeValue(value);
    };

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
                    placeholder="Enter your email"
                    secureTextEntry={false}
                    onChangeText={handleMailChange}
                />
                <FormInput
                    placeholder="Enter your password"
                    secureTextEntry={false}
                    onChangeText={handlePasswordChange}
                />
                <FormInput
                    placeholder="Confirm your password"
                    secureTextEntry={true}
                    onChangeText={handleConfirmPasswordChange}
                />
                <FormInput
                    placeholder="Enter your name"
                    secureTextEntry={false}
                    onChangeText={handleFullNameChange}
                />
                <FormInput
                    placeholder="Enter your birthday"
                    secureTextEntry={false}
                    onChangeText={handleDataChange}
                />
                <FormInput
                    placeholder="Enter your type"
                    secureTextEntry={false}
                    onChangeText={handleTypeChange}
                />
                <LoginButton
                    textBtn="Register"
                    onPress={async () => {
                        console.log('Before navigation:', emailValue, passWordValue, confirmPassWordValue, fullNameValue, birthDateValue, typeValue);
                        const loginSuccess = await createUserControler(emailValue, passWordValue, confirmPassWordValue, fullNameValue, birthDateValue, typeValue);

                        console.log('After login route:', loginSuccess);

                        if (loginSuccess) {
                            console.log('Navigating to Tabs');
                            navigation.navigate('Login');
                        } else {
                            console.log('Register failed');
                            notify('Usuário ou senha incorretos');
                        }
                    }}
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
