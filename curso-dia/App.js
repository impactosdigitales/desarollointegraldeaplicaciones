import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import DatosPersonales from './src/components/DatosPersonales';

export default function App() {
	return (
		<View style={styles.container}>
			<DatosPersonales
				titulo='EXCELENTE FIN'
				nombre='Raúl Zavaleta'
				telefono='(442) 129 8927'
				correo='raul@impactosdigitales.com'
				cuentaGitHub='@zavaletamx'
				edad={33}
				texto='Buenas noches, hasta el lunes'
				styles={styles}
			/>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#073B4C',
		alignItems: 'center',
		justifyContent: 'center',
	},
	titulo: {
		fontSize: 30,
		color: '#EF476F',
		fontWeight: 'bold',
		letterSpacing: 1,
		fontStyle: 'italic',
		marginVertical: 10,
	},
	subtitulo: {
		fontSize: 22,
		color: '#FFD166',
		marginVertical: 5,
	},
	texto: {
		fontSize: 18,
		color: '#06D6A0',
	},
});

/**
 * Un componente es una
 * función / clase / función flecha
 * Que retornan un elemento gráfico de la UI / UX
 *
 * Ejemplo de Componente con funcion nombrada
 * @see App.js
 *
 * Ejemplo de Componente con clase
 * @see DatosPersonales.js
 *
 * Ejemplo de Componente con función flecha
 * @see MiComponente.js
 */
