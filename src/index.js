import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './components/Test'
import Form from './components/Form_login'
import Register from './components/Register';
import Dynamic from './components/Dynamic_Form';
import TuVi from './components/TuVi';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Register />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
