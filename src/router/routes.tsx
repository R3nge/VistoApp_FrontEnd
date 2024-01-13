//Basic Imports
import React from 'react';

//Pages Imports
import Welcome from '../pages/welcome/welcome';
import Login from '../pages/login/login';
import Register from '../pages/register/register';
import Tabs from './tabs';
import NovoProprietario from '../pages/new_proprietario/new_proprietario';
import NovoEndereco from '../pages/new_endereco/new_endereco';
import NewProprietarioSucess from '../pages/new_proprietario_sucess/index';
import NewProprietarioError from '../pages/new_proprietario_error/index';
import ListProprietario from '../pages/list_proprietario';
import Teste from '../pages/teste/teste';

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
            <Stack.Screen name="NewProprietarioSucess" component={NewProprietarioSucess} options={{ headerShown: false }} />
            <Stack.Screen name="NovoEndereco" component={NovoEndereco} options={{ headerShown: false }} />
            <Stack.Screen name="NewProprietarioError" component={NewProprietarioError} options={{ headerShown: false }} />
            <Stack.Screen name="ListProprietario" component={ListProprietario} options={{ headerShown: false }} />
            <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
            <Stack.Screen name="Teste" component={Teste} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

