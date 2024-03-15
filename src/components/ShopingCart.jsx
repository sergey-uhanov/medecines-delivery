import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import fetchNewCustomer from '../API/newCustomersApi.js'
import fetchNewproducts from '../API/newOrderProduct.js'
import style from '../css/ShopCart.module.css'
import shopCartStore from '../store/shopeCartStore.js'
import CardShopCart from './CardShopCart.jsx'
function ShopingCart() {
	const product = shopCartStore(state => state.products)
	const deleteItemStore = shopCartStore(state => state.deleteItem)
	const clearStore = shopCartStore(state => state.clearStore)
	const [totalPrice, setTotalPrice] = useState(
		product.reduce((acc, cur) => acc + parseFloat(cur.price), 0)
	)
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		adress: '',
		order_amount: 0,
	})
	const [productData, setProductData] = useState([])
	useEffect(() => {
		setTotalPrice(product.reduce((acc, cur) => acc + parseFloat(cur.price), 0))
	}, [product])
	function handleProductDataChange(index, data) {
		setProductData(prev => {
			const newData = [...prev]
			newData[index] = data
			return newData
		})
	}

	const updateFormData = event => {
		setFormData({
			...formData,
			[event.target.id]: event.target.value,
		})
	}
	const history = useHistory()

	const handleRedirect = () => {
		history.push('/AcceptedOrder')
	}
	useEffect(() => {
		setFormData({
			...formData,
			order_amount: totalPrice.toFixed(2),
		})
	}, [totalPrice])
	function fetch() {
		for (let field in formData) {
			if (formData[field] === '') {
				alert('Please fill in all fields.')
				return
			}
		}
		console.log(formData)
		fetchNewCustomer(formData).then(data => {
			const id = data.id
			fetchNewproducts({ id, productData })
		})
		clearStore()
		localStorage.setItem('shopCartList', JSON.stringify([]))
		handleRedirect()
	}
	function handledeleteItemStore(id) {
		deleteItemStore(id)
		let localStorageShopCartString = localStorage.getItem('shopCartList')

		if (localStorageShopCartString !== null) {
			const localStorageShopCart = JSON.parse(localStorageShopCartString)
			const updateShopCart = localStorageShopCart.filter(item => item.id !== id)
			localStorage.setItem('shopCartList', JSON.stringify(updateShopCart))
		}
	}
	return (
		<>
			<form action='#'>
				<div className={style.shopCartPage}>
					<ul className={style.inputBlock}>
						<li className={style.inputItem}>
							<label htmlFor='UserName'>Name</label>
							<input
								required
								id='name'
								type='text'
								value={formData.name}
								onChange={updateFormData}
							/>
						</li>
						<li className={style.inputItem}>
							<label htmlFor='UserEmail'>Email</label>
							<input
								required
								id='email'
								type='email'
								value={formData.email}
								onChange={updateFormData}
							/>
						</li>
						<li className={style.inputItem}>
							<label htmlFor='UserNumPhone'>Phone</label>
							<input
								required
								id='phone'
								type='tel'
								value={formData.phone}
								onChange={updateFormData}
							/>
						</li>
						<li className={style.inputItem}>
							<label htmlFor='UserAdress'>Adress</label>
							<input
								required
								id='adress'
								type='text'
								value={formData.adress}
								onChange={updateFormData}
							/>
						</li>
					</ul>
					<div className={style.shopCart}>
						{product &&
							product.map((item, index) => (
								<CardShopCart
									key={index}
									setTotalPrice={setTotalPrice}
									product={item}
									index={index}
									onProductDataChange={handleProductDataChange}
									onDelete={handledeleteItemStore}
								/>
							))}
					</div>
				</div>
				<div className={style.footerForm}>
					<div className={style.totalPrice}>
						Total price: {totalPrice.toFixed(2)}
					</div>
					<button type='button' onClick={fetch}>
						Submit
					</button>
				</div>
			</form>
		</>
	)
}
export default ShopingCart
