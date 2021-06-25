import React, { useEffect } from 'react';

import {
	Alert,
	FlatList,
	RefreshControl,
} from 'react-native';
import UsuarioItem from '../components/UsuarioItem';

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
	const [cargando, setCargando] = React.useState(true);

	//Cuando ejecutar al inicio
	useEffect(() => {
		//EJEMPLO DATOS FIJOS: insertaArreglo();
		//Ejemplo: Promesa: cargaUsuariosPromise();
		//Ejemplo: async / await: cargaUsuariosAsync();
		cargaUsuariosAsync();
	}, []);

	const insertaArreglo = () => {
		const arrAux = [];
		for (let i = 0; i <= 15; i++) {
			arrAux.push({
				id: 1,
				email: i + 'raul@impactosdigitales.com',
				first_name: i + 'Raúl',
				last_name: i + 'Zavaleta',
				avatar: 'https://reqres.in/img/faces/1-image.jpg',
			});
		}
		setArreglo(arrAux);
	};

	const [arreglo, setArreglo] = React.useState([]);

	/**
	 * FlatList es un componente para visualizar
	 * colecciones de datos muy extensas, pues
	 * de manera automática pagina e indexa el
	 * contenido conforme se avanza en el Scroll
	 *
	 * props indispensables:
	 * 1.- data ------ indica la colección de datos
	 * 2.- renderItem- indica el diseño de cada elemento
	 *      Utiliza 1 argumentp
	 *      1.- elemento a iterar
	 * 3.- keyExtractor - indica el id de cada
	 * key de cada elemento
	 *
	 */

	/**
	 * Las promesas son una manera de incovar
	 * una acción que puede ejecutarse en segundo
	 * plano, permitiendo que la ejecución
	 * de la linea principal de código continue
	 * (Es el equivalente a un Thread en lenguajes
	 * ANSI)
	 *
	 * fetch ---- función que resuelve una
	 *            peticón http y retorna
	 *            una promesa (una promesa
	 *            puede retornar a otra promesa)
	 *
	 * fetch('URL')
	 * .then()
	 * .then()
	 * .catch();
	 */
	const cargaUsuariosPromise = () => {
		// fetch(
		// 	'https://reqres.in/api/users?per_page=12'
		// ).then((response) => {
		// 	console.log(JSON.stringify(response));
		// });
		fetch('https://reqres.in/api/users?per_page=12')
			.then((response) => response.json())
			.then((json) => {
				const arrAux = [];
				// json.data.forEach((usuario) =>
				// 	arrAux.push({
				// 		id: usuario.id,
				// 		first_name: usuario.first_name,
				// 		last_name: usuario.last_name,
				// 		email: usuario.email,
				// 		avatar: usuario.avatar,
				// 	})
				// );
				// setArreglo(arrAux);
				setArreglo(json.data);
				setCargando(false);
			})
			.catch(() => {
				Alert.alert('Error');
			});
	};

	/**
	 * Async  indica que una función será asíncrona
	 * lo que significa que probablemente no conteste
	 * o tarde mucho tiempo en responder, por lo que
	 * JS la ejecutará dentro de un worker y añadirá
	 * una promesa
	 *
	 * await es una palabra reservada que indica que
	 * debemos esperar la resolución de una promesa
	 * async para continuar
	 *
	 */
	const cargaUsuariosAsync = async () => {
		try {
			/*
            esperamos que la url del servicio
            responda
            */
			const response = await fetch(
				'https://reqres.in/api/users?per_page=12'
			);
			const json = await response.json();
			setArreglo(json.data);
			setCargando(false);
		} catch (e) {
			Alert.alert('ERROR', e.getMessage());
			setCargando(false);
		}
	};

	return (
		<FlatList
			refreshControl={
				<RefreshControl refreshing={cargando} />
			}
			data={arreglo}
			renderItem={(item) => (
				<UsuarioItem
					avatar={item.item.avatar}
					nombre={item.item.first_name}
					apellido={item.item.last_name}
					correo={item.item.email}
					navigation={props.navigation}
				/>
			)}
			/*
            renderItem={(item) => (
				<View style={{ margin: 20 }}>
					<Image
						source={{ uri: item.item.avatar }}
						style={{ width: 100, height: 100 }}
					/>
					<Text>{item.item.first_name}</Text>
					<Text>{item.item.last_name}</Text>
					<Text>{item.item.email}</Text>
				</View>
			)}
            */
			keyExtractor={(item, index) =>
				`e-${item.id}-${index}`
			}
		/>
	);
};

export default EjemploFlatList;
