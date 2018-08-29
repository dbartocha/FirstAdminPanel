import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import * as firebase from 'firebase'

let config = {
    apiKey: "AIzaSyBTnnfhcGKXIMdhqS7kohlULrDrcTaWZAw",
    authDomain: "panel-admina-na-poczatek.firebaseapp.com",
    databaseURL: "https://panel-admina-na-poczatek.firebaseio.com",
    projectId: "panel-admina-na-poczatek",
    storageBucket: "panel-admina-na-poczatek.appspot.com",
    messagingSenderId: "482613451943"
};

firebase.initializeApp(config);

ReactDOM.render(
    <App />,
    document.getElementById('root'));
registerServiceWorker();
