import React from 'react';
import {
	Alert,
	Button,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	TextInput,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '../styles/main';

import firebase from '../backend/firebase';

const EditarGenero = (props) => {
	const [nombre, setNombre] = React.useState(
		props.route.params.nombre
	);
	const [id, setId] = React.useState(
		props.route.params.id
	);

	React.useEffect(() => {});

	const editarGenero = async () => {
		//UPDATE
		await firebase.db
			.collection('generos')
			.doc(id)
			.update({ nombre: nombre });

		Alert.alert('Completado', 'Genero editado', [
			{
				text: 'Regresar',
				onPress: () =>
					props.navigation.navigate(
						'ListaGeneros'
					),
			},
		]);
		//SET
	};

	return (
		<KeyboardAvoidingView
			behavior={
				Platform.OS === 'ios' ? 'padding' : 'height'
			}
			style={{
				flex: 1,
			}}
		>
			<TouchableWithoutFeedback
				style={{
					flex: 1,
				}}
				onPress={() => Keyboard.dismiss()}
			>
				<View style={{ flex: 1, marginTop: 30 }}>
					<MaterialIcons
						name='border-color'
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
							placeholder='Género'
							keyboardType='default'
							maxLength={50}
							value={nombre}
							onChangeText={(val) =>
								setNombre(val)
							}
						/>

						<Button
							title='Editar género'
							onPress={editarGenero}
						/>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default EditarGenero;
