/*
Importar la librería global de firebase
*/
import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyAqLwxVQ1qyVdOdmjgEhPcYwmRT7FbUVGY',
	authDomain: 'fir-firebase-7956c.firebaseapp.com',
	projectId: 'fir-firebase-7956c',
	storageBucket: 'fir-firebase-7956c.appspot.com',
	messagingSenderId: '387492530432',
	appId: '1:387492530432:web:9701d77d0028f7a3558be5',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Generamos una constante porr cada servicio de firebase
//que necesitemos implementar
const db = firebase.firestore();
const storage = firebase.storage();

export default {
	db,
	storage,
};
