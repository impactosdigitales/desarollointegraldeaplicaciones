import { StatusBar } from 'expo-status-bar';
import React from 'react';

/**
 * La navegación de una app está englobada en el objeto 
 * NavigationContainer (Solo uno por App)
 * 
 * La navegación por Stack utiliza un contenedor 
 * createStackNavigator
 */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import EjemploState from './src/screens/EjemploState';
import EjemploHook from './src/screens/EjemploHook';
import Menu from './src/screens/Menu';
import EjemploFlex from './src/screens/EjemploFlex';

/**
 * Generamos una constante para guardar la navegación
 * de tipo stack
 */
const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator
              initialRouteName='Menu'>
              {/**
               * Definimos las pantallas 
               * Screens en las que queremos navegar
               * 
               * Stack utiliza 2 parámetros para definir 
               * los elementos de navegación
               * 1.- name -------- Sobrenombre (Alias) al screen
               * 2.- component --- Referencia al componentes a navegar
               */}
              <Stack.Screen
                  name='EjemploState'
                  component={EjemploState} />
              
              <Stack.Screen
                  name='EjemploHook'
                  component={EjemploHook} />
              
              <Stack.Screen
                  name='Menu'
                  component={Menu} />
              
              <Stack.Screen
                  name='EjemploFlex'
                  component={EjemploFlex} />
                  
          </Stack.Navigator>
      </NavigationContainer>
  );
}

