import { useState } from 'react'
import style from '../css/ShopCart.module.css'
import shopCartStore from '../store/shopeCartStore.js'
import CardShopCart from './CardShopCart.jsx'
import Navigation from './Navigation'

function ShopingCart() {
	const product = shopCartStore(state => state.products)
	const [totalPrice, setTotalPrice] = useState(
		product.reduce((acc, cur) => acc + parseFloat(cur.price), 0)
	)
	console.log(totalPrice)
	return (
		<>
			<Navigation />
			<form action='#'>
				<div className={style.shopCartPage}>
					<ul className={style.inputBlock}>
						<li className={style.inputItem}>
							<label htmlFor='UserName'>Name</label>
							<input required id='UserName' type='text' />
						</li>
						<li className={style.inputItem}>
							<label htmlFor='UserEmail'>Email</label>
							<input required id='UserEmail' type='email' />
						</li>
						<li className={style.inputItem}>
							<label htmlFor='UserNumPhone'>Phone</label>
							<input required id='UserNumPhone' type='tel' />
						</li>
						<li className={style.inputItem}>
							<label htmlFor='UserAdress'>Adress</label>
							<input required id='UserAdress' type='text' />
						</li>
					</ul>
					<div className={style.shopCart}>
						{product &&
							product.map(item => (
								<CardShopCart setTotalPrice={setTotalPrice} product={item} />
							))}
					</div>
				</div>
				<div className={style.footerForm}>
					<div className={style.totalPrice}>
						Total price: {totalPrice.toFixed(2)}
					</div>
					<button type='submit'>Submit</button>
				</div>
			</form>
		</>
	)
}
export default ShopingCart
