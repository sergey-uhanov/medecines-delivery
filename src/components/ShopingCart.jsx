import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import fetchNewCustomer from '../API/newCustomersApi.js'
import fetchNewproducts from '../API/newOrderProduct.js'
import style from '../css/ShopCart.module.css'
import shopCartStore from '../store/shopeCartStore.js'
import CardShopCart from './CardShopCart.jsx'
import Navigation from './Navigation'
function ShopingCart() {
	const product = shopCartStore(state => state.products)
	const clearStore = shopCartStore(state => state.clearStore)
	const [totalPrice, setTotalPrice] = useState(
		product.reduce((acc, cur) => acc + parseFloat(cur.price), 0)
	)
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		adress: '',
		order_amount: 2,
	})
	const [productData, setProductData] = useState([])
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
	const navigate = useNavigate()

	const handleRedirect = () => {
		navigate('/AcceptedOrder')
	}
	function fetch() {
		for (let field in formData) {
			if (formData[field] === '') {
				alert('Пожалуйста, заполните все поля.')
				return
			}
		}
		setFormData({
			...formData,
			order_amount: totalPrice.toFixed(2),
		})

		fetchNewCustomer(formData).then(data => {
			const id = data.id
			fetchNewproducts({ id, productData })
		})
		clearStore()

		handleRedirect()
	}
	return (
		<>
			<Navigation />
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
