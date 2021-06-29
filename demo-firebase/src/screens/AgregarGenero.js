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
import styles from './../styles/main';

import firebase from './../backend/firebase';

const AgregarGenero = (props) => {
	const [nombre, setNombre] = React.useState('');

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
							placeholder='Nuevo género'
							keyboardType='default'
							maxLength={50}
							value={nombre}
							onChangeText={(val) =>
								setNombre(val)
							}
						/>

						<Button
							title='Agregar género'
							onPress={async () => {
								try {
									/*
                                    Agregamos un nuevo usuario
                                    utilizando una función asíncrona
                                    */
									const nuevoGenero =
										await firebase.db
											.collection(
												'generos'
											)
											.add({
												nombre: nombre,
											});
									Alert.alert(
										'Genero  agregado',
										`Nuego genero con el id: ${nuevoGenero.id}`
									);
								} catch (e) {
									console.warn(e);
									Alert.alert('ERROR');
								}
							}}
						/>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default AgregarGenero;
