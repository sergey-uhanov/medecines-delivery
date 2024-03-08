import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import AcceptedOrderPage from './components/AcceptedOrderPage'
import ShopingCart from './components/ShopingCart'
import './index.css'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/shopingCart',
		element: <ShopingCart />,
	},
	{
		path: '/AcceptedOrder',
		element: <AcceptedOrderPage />,
	},
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router} />)
