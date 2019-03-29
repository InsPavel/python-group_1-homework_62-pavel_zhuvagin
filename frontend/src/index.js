import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faDoorOpen, faDoorClosed, faKey } from '@fortawesome/free-solid-svg-icons'
library.add(faUser, faDoorOpen, faDoorClosed, faKey);
import {createStore, applyMiddleware} from 'redux'
import reducer from './store/reducer'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
