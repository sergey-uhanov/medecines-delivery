import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import ShopingCart from './components/ShopingCart'
import './index.css'

const router = createBrowserRouter([
	{
		path: '/shop',
		element: <App />,
	},
	{
		path: '/shopingCart',
		element: <ShopingCart />,
	},
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router} />)
