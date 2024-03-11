import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, HashRouter as Router } from 'react-router-dom'
import App from './App'
import AcceptedOrderPage from './components/AcceptedOrderPage'
import ShopingCart from './components/ShopingCart'
import './index.css'

ReactDOM.render(
	<HashRouter>
		<Router basename={process.env.PUBLIC_URL}>
			<Route exact path='/' component={App} />
			<Route path='/shopingCart' component={ShopingCart} />
			<Route path='/AcceptedOrder' component={AcceptedOrderPage} />
		</Router>
	</HashRouter>,
	document.getElementById('root')
)
