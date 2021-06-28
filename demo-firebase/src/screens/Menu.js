import React from 'react';
import {
	ScrollView,
	View,
	Text,
	Button,
} from 'react-native';

const Menu = (props) => {
	return (
		<ScrollView style={{ flex: 1 }}>
			<Separador />

			<Button
				title='Ejemplo Flex'
				color='tomato'
				/**
				 * OnPress utiliza una función
				 * (Función Flecha)
				 * anónimas para indicar las
				 * acciones del evento
				 *
				 * Los hijos de un NAvigationContainer tienen
				 * una prop llamada navigation con la que pueden
				 * utilizar, modificar o eliminar la navegación
				 * de la app
				 *
				 * navigation.navigate('_NOMBRE_SCREEN')
				 */
				onPress={() =>
					props.navigation.navigate('EjemploFlex')
				}
			/>

			<Separador />

			<Button
				title='Ejemplo State'
				color='tomato'
				onPress={() =>
					props.navigation.navigate(
						'EjemploState'
					)
				}
			/>

			<Separador />

			<Button
				title='Ejemplo FlatList'
				color='tomato'
				onPress={() =>
					props.navigation.navigate(
						'EjemploFlatList'
					)
				}
			/>

			<Separador />

			<Button
				title='Lista de géneros'
				color='tomato'
				onPress={() =>
					props.navigation.navigate(
						'ListaGeneros'
					)
				}
			/>

			<Separador />

			<Button
				title='Lista de películas'
				color='tomato'
				onPress={() =>
					props.navigation.navigate(
						'ListaPeliculas'
					)
				}
			/>
		</ScrollView>
	);
};

const Separador = () => {
	return <View style={{ marginVertical: 10 }} />;
};

export default Menu;
