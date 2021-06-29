import React from 'react';
import { FlatList, Text, View } from 'react-native';
import GeneroItem from '../components/GeneroItem';
import firebase from './../backend/firebase';

const ListaGeneros = (props) => {
	const [generos, setGeneros] = React.useState([]);

	React.useEffect(() => {
		//getGeneros();
		snapGeneros();
	}, []);

	const getGeneros = () => {
		/*
        Seleccionar todos los documentos de
        la colección generos
        */
		firebase.db
			.collection('generos')
			.get()
			.then((snapShot) => {
				//Recorrer la consulta de datos
				//desde firestore
				const arr = [];
				snapShot.forEach((doc) => {
					// console.log(doc.id);
					// console.log(doc.data());
					arr.push({
						id: doc.id,
						nombre: doc.data().nombre,
					});
				});
				setGeneros(arr);
			});
	};

	const snapGeneros = () => {
		firebase.db
			.collection('generos')
			.onSnapshot((snapShot) => {
				snapShot.forEach((doc) => {
					// console.log(doc.id);
					// console.log(doc.data());
					const arr = [];
					snapShot.forEach((doc) => {
						// console.log(doc.id);
						// console.log(doc.data());
						arr.push({
							id: doc.id,
							nombre: doc.data().nombre,
						});
					});
					setGeneros(arr);
				});
			});
	};

	return (
		<FlatList
			data={generos}
			renderItem={(item) => (
				<GeneroItem item={item.item} />
			)}
			keyExtractor={(item) => item.id}
		/>
	);
};

export default ListaGeneros;
