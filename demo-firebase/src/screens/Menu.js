import React from 'react';
import { ScrollView, View, Text, Button } from 'react-native';

const Menu = (props) => {
    return (
        <ScrollView>
            <Button
                title='Ejemplo Flex'
                color='tomato'
                /**
                 * OnPress utiliza una función 
                 * (Función Flecha)
                 * anónimas para indicar las 
                 * acciones del evento
                 * 
                 * Los hijos de un NAvigationContainer tienen
                 * una prop llamada navigation con la que pueden
                 * utilizar, modificar o eliminar la navegación
                 * de la app
                 * 
                 * navigation.navigate('_NOMBRE_SCREEN')
                 */
                onPress={
                    () => props.navigation.navigate('EjemploFlex')
                } />
        </ScrollView>
    );
}
 
export default Menu;