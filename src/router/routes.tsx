//Basic Imports
import React from 'react';

//Pages Imports
import Welcome from '../pages/welcome/welcome';
import Login from '../pages/login/login';
import Register from '../pages/register/register';
import Tabs from './tabs';
import NovoProprietario from '../pages/new_proprietario/new_proprietario';
import NewProprietarioSucess from '../pages/new_proprietario_sucess/index';
import ListProprietario from '../pages/list_proprietario/list_proprietario';
import NovoImovel from '../pages/new_imovel/new_imovel';
import ListImovel from '../pages/list_imovel/list_imovel';
import NewVistoria from '../pages/new_vistoria/new_vistoria';
import NewComodo from '../pages/new_comodo/new_comodo';

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
            <Stack.Screen name="ListProprietario" component={ListProprietario} options={{ headerShown: false }} />
            <Stack.Screen name="NovoImovel" component={NovoImovel} options={{ headerShown: false }} />
            <Stack.Screen name="NewVistoria" component={NewVistoria} options={{ headerShown: false }} />
            <Stack.Screen name="NewComodo" component={NewComodo} options={{ headerShown: false }} />
            <Stack.Screen name="ListImovel" component={ListImovel} options={{ headerShown: false }} />
            <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

