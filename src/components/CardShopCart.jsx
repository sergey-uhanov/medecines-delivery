import { useEffect, useState } from 'react'
import style from '../css/CardShopCart.module.css'

function CardShopCart({ setTotalPrice, product }) {
	const productPrice = parseFloat(product.price)
	const [price, setPrice] = useState(productPrice)
	const [pieceCount, setPieceCount] = useState(1)

	useEffect(() => {
		setPrice(productPrice * pieceCount)
	}, [pieceCount])

	function getRandomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min
	}
	function handleIncrement() {
		setPieceCount(prev => prev + 1)
		setTotalPrice(prev => prev + productPrice)
	}

	function handleDecrement() {
		if (pieceCount > 1) {
			setPieceCount(prev => prev - 1)
			setTotalPrice(prev => prev - productPrice)
		}
	}
	const imgProduct = require(`../img/${getRandomNumber(1, 16)}.jpg`)
	return (
		<div className={style.cardWrapper}>
			<div className={style.imgwrapper}>
				<img src={imgProduct} alt='drugs' />
			</div>
			<div className={style.details}>
				<h4 className={style.title}>{product.name}</h4>
				<div className={style.price}>Price {price}</div>
				<div className={style.inputWrapper}>
					<div className={style.counter}>
						<button type='button' onClick={handleDecrement}>
							-
						</button>
						<input
							className={style.input}
							type='text'
							value={pieceCount}
							readOnly
						/>
						<button type='button' onClick={handleIncrement}>
							+
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
export default CardShopCart
