/**
 * La definición de una componente desde una clase
 * debe heredar de la clase Componente y
 * implementar el metodo abstracto render
 */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import MiComponente from './MiComponente';

export default class DatosPersonales extends Component {
	/*
    Datos personales contiene un atributo denominado
    this.props donde se almacenan a manera de objeto
    todas las propiedades que declaró el componente 
    padre
    */

	/*
    Invocamos al método render para 
    retornar un componente gráfico
    */
	render() {
		//console.log(this.props);
		const styles = this.props.styles;
		return (
			<View>
				{/*Dentro de Return las llaves
                significan código*/}
				<Text style={styles.titulo}>
					{this.props.titulo}
				</Text>
				<Text style={styles.subtitulo}>
					{this.props.nombre}
				</Text>
				<Text style={styles.subtitulo}>
					{this.props.telefono}
				</Text>
				<Text style={styles.subtitulo}>
					{this.props.correo}
				</Text>
				<Text style={styles.subtitulo}>
					{this.props.cuentaGitHub}
				</Text>
				<Text style={styles.subtitulo}>
					{this.props.edad} años
				</Text>
				<MiComponente
					texto={this.props.texto}
					styles={this.props.styles}
				/>
			</View>
		);
	} // Render
} // Class
