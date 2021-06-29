import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {
	FontAwesome5,
	FontAwesome,
} from '@expo/vector-icons';

const GeneroItem = (props) => {
	return (
		<View
			style={{
				padding: 20,
				backgroundColor: '#fff',
				marginVertical: 10,
				marginHorizontal: 20,
				borderRadius: 10,
				flex: 1,
				flexDirection: 'row',
			}}
		>
			<View style={{ flex: 4 }}>
				<Text style={{ fontSize: 22 }}>
					<FontAwesome5
						name='tag'
						color='tomato'
						size={22}
					/>
					{'    '}
					{props.item.nombre}
				</Text>
			</View>
			<View
				style={{
					flex: 2,
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'flex-end',
				}}
			>
				<TouchableOpacity
					style={{
						width: 44,
						height: 44,
						marginEnd: 10,
						backgroundColor: 'black',
						borderRadius: 22,
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<FontAwesome
						name='pencil-square-o'
						color='#fff'
						size={22}
					/>
				</TouchableOpacity>

				<TouchableOpacity
					style={{
						width: 44,
						height: 44,
						backgroundColor: 'red',
						justifyContent: 'center',
						alignItems: 'center',
						borderRadius: 22,
					}}
				>
					<FontAwesome5
						name='trash'
						color='#fff'
						size={22}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default GeneroItem;
