import React from 'react';
import { Button, Text, View } from 'react-native';

const EjemploState = (props) => {
	return (
		<View
			style={{
				flex: 1,
			}}
		>
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Button title='+' color='tomato' />
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
						color: 'tomato',
						fontSize: 128,
					}}
				>
					0
				</Text>
			</View>
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Button title='-' color='tomato' />
			</View>
		</View>
	);
};

export default EjemploState;
