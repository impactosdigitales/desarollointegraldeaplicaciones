import React, { useState, useEffect } from 'react';

import {
	FlatList,
	View,
	Text,
	ScrollView,
} from 'react-native';

/**
 * Hooks
 * Los Hooks son funciones que están ligadas al
 * ciclo de vida del componente en 3 momentos:
 * 1.- El inicio (cuando carga el componente)
 * 2.- La interacción (cuando el componente sufre
 *                     algún cambio)
 * 3.- El cierre (cuando el componente es eliminado)
 *
 * Se representan por funciones flecha
 * de la sig. manera:
 *
 * Hook sin referencia (se ejecuta al incio)
 * Hook con referencia (se ejecuta al actualizarse
 *                      la referencia)
 * Hook con retorno    (se ejecuta al eliminarse el
 *                      componente)
 *
 * React Native define a los hooks como efectos
 * importar a useEffect
 */

const EjemploFlatList = (props) => {
	//Cuando ejecutar al inicio
	useEffect(() => {
		insertaArreglo();
	}, []);

	const insertaArreglo = () => {
		console.log('Hola Mundo en un Hook');
		const arrAux = [];
		for (let i = 0; i <= 150; i++) {
			arrAux.push(i);
		}
		setArreglo(arrAux);
	};

	const [arreglo, setArreglo] = React.useState([]);

	return (
		<ScrollView>
			{/**
			 * Mostrar los elementos del arreglo
			 * Usando la función forEach de la
			 * colección arreglo
			 */}
			{arreglo.map((elemento, index) => (
				<View
					key={`e-${index}`}
					style={{
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
						padding: 30,
						backgroundColor: '#404E4D',
						marginVertical: 10,
						marginHorizontal: 20,
						borderRadius: 10,
					}}
				>
					<Text style={{ color: '#ccc' }}>
						{index} = {elemento}
					</Text>
				</View>
			))}
		</ScrollView>
	);
};

export default EjemploFlatList;
