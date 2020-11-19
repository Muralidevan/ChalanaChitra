import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css'
import { Provider } from 'react-redux'
import configureStore from './ConfigStore/Store'

const Store = configureStore()

console.log(Store.getState())

Store.subscribe(() => {
	console.log(Store.getState())
})



const jsx = (
	<Provider store={Store}>
		<App />
	</Provider>
)
ReactDOM.render(jsx, document.getElementById('root'))

