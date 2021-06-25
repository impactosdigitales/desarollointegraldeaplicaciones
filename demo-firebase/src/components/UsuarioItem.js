import React from 'react';
import {
	Text,
	View,
	Image,
	TouchableOpacity,
} from 'react-native';

const UsuarioItem = (props) => {
	return (
		<TouchableOpacity
			onPress={() =>
				props.navigation.navigate(
					'DetalleUsuario',
					{
						nombre: props.nombre,
						apellido: props.apellido,
						correo: props.correo,
					}
				)
			}
		>
			<View
				style={{
					flex: 1,
					flexDirection: 'row',
					backgroundColor: '#B8B8FF',
					padding: 20,
					marginVertical: 10,
					marginHorizontal: 20,
					borderRadius: 10,
				}}
			>
				<View
					style={{
						flex: 2,
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Image
						source={{ uri: props.avatar }}
						style={{
							width: 100,
							height: 100,
							borderRadius: 50,
						}}
					/>
				</View>

				<View
					style={{
						flex: 3,
						justifyContent: 'space-around',
						alignItems: 'flex-start',
					}}
				>
					<Text>{props.nombre}</Text>
					<Text>{props.apellido}</Text>
					<Text>{props.correo}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default UsuarioItem;
