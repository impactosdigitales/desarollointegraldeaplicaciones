/*
Un componente creado a partir de una constante por 
medio deuna función flecha, es la manera actual y 
recomendada de React para crear componentes

Tiene la misma regla que una función nombrada
1.- Una constante del mismo nombre que el archivo
*/
import React from 'react';
import { Text } from 'react-native';
/*
Para utilizar una prop dentro de una 
función nombrada / flecha
solo debemos agregar el parámetro props a la 
declaración de la función como argumento
*/
const MiComponente = (props) => {
	/**
	 * Las propiedades [props] son atributos
	 * adicionables a la definción de un componente
	 * Existen props por defecto y props
	 * dinamicas (creadas por el usuario)
	 * Las props pueden contener 2 tipos
	 * de valores
	 * 1.- String (String first)
	 * 2.- Valor comlejo (Todos lo demás)
	 * <MiComp prop1='' prop2={} />
	 * Existen dos tipos propiedades
	 */
	//console.log(props);
	const styles = props.styles;
	return (
		// <Text style={[styles.texto, { fontSize: 20 }]}>
		// 	{props.texto}
		// </Text>
		<Text
			style={{
				...styles.texto,
				marginTop: 40,
				textDecorationLine: 'underline',
				letterSpacing: 3,
			}}
		>
			{props.texto}
		</Text>
	);
}; // termina constante

/**
 * Muy importante, no olvidar la exportación de la
 * constante como última línea de código
 */
export default MiComponente;
