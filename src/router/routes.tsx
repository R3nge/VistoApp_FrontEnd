//Basic Imports
import React from 'react';

//Pages Imports
import Welcome from '../pages/welcome/welcome';
import Login from '../pages/login/login';
import Register from '../pages/register/register';
import Tabs from './tabs';
import NovoProprietario from '../pages/proprietario/novoProprietario/novoProprietario';
import NovoEnderecoProprietario from '../pages/proprietario/novoEnderecoProprietario/novoEnderecoProprietario';
import { ScreenStack } from 'react-native-screens';

//Navigation Imports
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Constants
const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="NovoProprietario" component={NovoProprietario} options={{ headerShown: false }} />
            <Stack.Screen name="NovoEndereco" component={NovoEndereco} options={{ headerShown: false }} />
            <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

