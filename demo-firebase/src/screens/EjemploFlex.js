import React from 'react';
import { View } from 'react-native';

const EjemploFlex = (props) => {
	return (
		<View style={{ flex: 1, flexDirection: 'row' }}>
			<View
				style={{ flex: 1, backgroundColor: '#000' }}
			>
				<View
					style={{
						flex: 1,
						backgroundColor: 'tomato',
					}}
				/>
				<View
					style={{
						flex: 1,
						backgroundColor: 'transparent',
					}}
				/>
			</View>
			<View
				style={{
					flex: 2,
					backgroundColor: '#FAF',
					flexDirection: 'column',
				}}
			>
				<View
					style={{
						flex: 1,
						backgroundColor: '#ABC',
					}}
				/>
				<View
					style={{
						flex: 1,
						backgroundColor: '#ABCCBA',
					}}
				/>
				<View
					style={{
						flex: 1,
						backgroundColor: '#ABF',
					}}
				>
					<View
						style={{
							flex: 1,
							flexDirection: 'row',
						}}
					>
						<View
							style={{
								flex: 1,
								backgroundColor: '#FDA',
							}}
						/>
						<View
							style={{
								flex: 1,
								backgroundColor: '#ADF',
							}}
						/>
						<View
							style={{
								flex: 1,
								backgroundColor: '#DAD',
							}}
						/>
					</View>
				</View>
			</View>
		</View>
	);
};

export default EjemploFlex;
