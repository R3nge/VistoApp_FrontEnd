// Importing necessary modules and components
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  NavigationContainer,
} from '@react-navigation/native';

// Importing Routes from local file which contains the definitions for the different screens or pages in the app
import Routes from './src/router/routes';

// Importing VistoriaProvider from local file which is a context provider for the app
import { VistoriaProvider } from './src/context/new_vistoria.context';

// Main component of the application
export default function App() {
  return (
    // NavigationContainer is the root component for the navigation tree
    <NavigationContainer>
      <VistoriaProvider>
        <StatusBar backgroundColor="#233d1d" barStyle="light-content" />
        <Routes />
      </VistoriaProvider>
    </NavigationContainer>
  );
}