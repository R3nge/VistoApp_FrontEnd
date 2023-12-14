//Basic Imports
import React from 'react';

//Pages Imports
import Home from '../pages/tab_home/home';
import Vistoria from '../pages/tab_vistoria/vistoria';
import Imovel from '../pages/tab_imovel/tab_imovel';
import Proprietario from '../pages/tab_proprietario/tab_proprietario';

//Navigation Imports
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Components Imports
import MyTabBar from '../components/customTabBar';

//Icons Imports
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={
        {
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarInactiveTintColor: '#222',

          tabBarStyle: {
            borderTopWidth: 0,
            backgroundColor: '#fff',
          }
        }
      }
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (
            "home"
          ),
        }}
      />
      <Tab.Screen
        name="Vistoria"
        component={Vistoria}
        options={{
          tabBarIcon: "assignment"
        }}
      />
      <Tab.Screen
        name="Imovel"
        component={Imovel}
        options={{
          tabBarIcon: "apartment",
        }}
      />
      <Tab.Screen
        name="Proprietario"
        component={Proprietario}
        options={{
          tabBarIcon: "person",
        }}
      />
    </Tab.Navigator>
  );
}