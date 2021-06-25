import React, { useState } from 'react';
import {
	Alert,
	Platform,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

/*
Adicionamos iconos a nuestro Screen
*/
import {
	AntDesign,
	FontAwesome5,
} from '@expo/vector-icons';

/**
 * Los eventos en RN pueden escribirse directamente
 * dentro de una función flecha como argumento del
 * propio evento
 *
 * Tambien se pueden encapsular las instrucciones
 * del evento en una constante
 */

const EjemploState = (props) => {
	/**
	 * Para poder actualizar la UI en React es necesario
	 * utilizar estados (states) que son constantes
	 * especiales, que se encuentran "enganchadas" a
	 * culquier actualizaciíon de la UI
	 *
	 * RN utiliza el principio de getter / setter para
	 * actualizar una constante y reemplazarla por
	 * cualquier version actualizada de la misma constante
	 *
	 * const [_NOM_ESTADO_, _FN_ESTADO] = useState(_VALOR_DEFECTO);
	 */
	const [valorNumero, setValorNumero] = useState(144);
	const [color, setColor] = useState('tomato');

	/**
	 * Evento clic encapsulado
	 */
	const restar = () => {
		// console.log('Aquí en menos');
		// valor--;
		// console.log(valor);
		setValorNumero(valorNumero - 1);
	};

	/* Variable global para generar un contador */
	let valor = 77;

	return (
		<View
			style={{
				flex: 1,
			}}
		>
			<View
				style={{
					flex: 1,
				}}
			>
				<TouchableOpacity
					style={{
						flex: 1,
						backgroundColor: color,
						justifyContent: 'center',
						alignItems: 'center',
					}}
					//Evento click sin encapsular
					onPress={() => {
						// console.log('Aqui en mas');
						// // valor = valor + 1
						// valor++;
						// console.log(valor);
						setValorNumero(valorNumero + 1);
						console.log(valorNumero);

						/*
                        Usamos la librería Platform 
                        para saber cual es el SO del 
                        dispositivo que ejecuta este 
                        código
                        */
						const sistemaOperativo =
							Platform.OS;

						/*
                        Lib. de alertas Nativas 
                        */
						if (sistemaOperativo !== 'web') {
							Alert.alert(sistemaOperativo);
						} else {
							alert(sistemaOperativo);
						}
					}}
				>
					<FontAwesome5
						name='plus'
						size={90}
						color='#eee'
					/>
				</TouchableOpacity>
			</View>
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Text
					style={{
						color: color,
						fontSize: 128,
					}}
				>
					{valorNumero}
				</Text>
			</View>
			<View
				style={{
					flex: 1,
				}}
			>
				<TouchableOpacity
					style={{
						flex: 1,
						backgroundColor: color,
						justifyContent: 'center',
						alignItems: 'center',
					}}
					onPress={restar}
				>
					<AntDesign
						name='minus'
						size={128}
						color={'#eee'}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default EjemploState;
