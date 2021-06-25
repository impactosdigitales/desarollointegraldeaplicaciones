import React from 'react';

import { View, Text } from 'react-native';

const DetalleUsuario = (props) => {
	console.log(props);
	const params = props.route.params;
	return (
		<View>
			<Text> {params.nombre} </Text>
			<Text> {params.apellido} </Text>
			<Text> {params.correo} </Text>
		</View>
	);
};

export default DetalleUsuario;
