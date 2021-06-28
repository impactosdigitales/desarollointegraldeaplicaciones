import React, { useState } from 'react';
import {
	Button,
	TextInput,
	View,
	FlatList,
	Text,
	Switch,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './../styles/main';

const AgregarPelicula = (props) => {
	const [form, setForm] = useState({
		titulo: '',
		generos: [],
		desc: '',
		poster: '',
	});

	const [generos, setGeneros] = useState([
		'Genero A',
		'Genero B',
		'Genero C',
		'Genero D',
		'Genero E',
		'Genero F',
		'Genero G',
		'Genero H',
		'Genero I',
	]);

	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
			}}
		>
			<MaterialIcons
				name='add-box'
				size={64}
				color='tomato'
				style={{ alignSelf: 'center' }}
			/>

			<View
				style={{
					marginTop: 30,
					paddingHorizontal: 10,
				}}
			>
				<TextInput
					style={styles.formInput}
					placeholder='Título'
					keyboardType='default'
					maxLength={150}
				/>

				<FlatList
					data={generos}
					renderItem={(item) => (
						<View
							style={{
								flex: 1,
								flexDirection: 'row',
								justifyContent: 'center',
								alignItems: 'center',
								margin: 10,
							}}
						>
							<Switch />
							<Text>{item.item}</Text>
						</View>
					)}
					keyExtractor={(item, index) =>
						`e-${index}`
					}
					numColumns={3}
				/>

				<TextInput
					style={styles.formInput}
					placeholder='Descripción'
					keyboardType='default'
					multiline
					numberOfLines={5}
				/>

				<TextInput
					style={styles.formInput}
					placeholder='Poster'
					keyboardType='url'
				/>

				<Button title='Agregar película' />
			</View>
		</View>
	);
};

export default AgregarPelicula;
