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
import EjemploFlatList from './src/screens/EjemploFlatList';
import DetalleUsuario from './src/screens/DetalleUsuario';
import ListaGeneros from './src/screens/ListaGeneros';
import ListaPeliculas from './src/screens/ListaPeliculas';
import { LogBox, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import AgregarGenero from './src/screens/AgregarGenero';
import AgregarPelicula from './src/screens/AgregarPelicula';
/**
 * Generamos una constante para guardar la navegación
 * de tipo stack
 */
const Stack = createStackNavigator();

export default function App() {
	LogBox.ignoreLogs([
		'Setting a timer for a long period of time',
	]);
	//LogBox.ignoreAllLogs();

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Menu'>
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
					component={EjemploState}
				/>

				<Stack.Screen
					name='EjemploHook'
					component={EjemploHook}
				/>

				<Stack.Screen
					name='Menu'
					component={Menu}
				/>

				<Stack.Screen
					name='EjemploFlex'
					component={EjemploFlex}
				/>

				<Stack.Screen
					name='EjemploFlatList'
					component={EjemploFlatList}
				/>

				<Stack.Screen
					name='DetalleUsuario'
					component={DetalleUsuario}
				/>

				<Stack.Screen
					name='ListaGeneros'
					component={ListaGeneros}
					options={(propScreenOptions) => ({
						title: 'Géneros',
						headerRight: () => (
							<TouchableOpacity
								style={{
									paddingHorizontal: 20,
									paddingVertical: 5,
								}}
								onPress={() =>
									propScreenOptions.navigation.navigate(
										'AgregarGenero'
									)
								}
							>
								<Entypo
									name='add-to-list'
									size={20}
								/>
							</TouchableOpacity>
						),
					})}
				/>

				<Stack.Screen
					name='ListaPeliculas'
					component={ListaPeliculas}
					options={(propScreenOptions) => ({
						title: 'Peliculas',
						headerRight: () => (
							<TouchableOpacity
								style={{ marginRight: 20 }}
								onPress={() =>
									propScreenOptions.navigation.navigate(
										'AgregarPelicula'
									)
								}
							>
								<Entypo
									name='add-to-list'
									size={20}
								/>
							</TouchableOpacity>
						),
					})}
				/>

				<Stack.Screen
					options={{ title: 'Agregar género' }}
					name='AgregarGenero'
					component={AgregarGenero}
				/>

				<Stack.Screen
					options={{ title: 'Agregar pelicula' }}
					name='AgregarPelicula'
					component={AgregarPelicula}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
