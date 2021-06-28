import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './../styles/main';

const AgregarGenero = (props) => {
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
					placeholder='Nuevo género'
					keyboardType='default'
					maxLength={50}
				/>

				<Button title='Agregar género' />
			</View>
		</View>
	);
};

export default AgregarGenero;
