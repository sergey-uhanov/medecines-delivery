import { useEffect, useState } from 'react'
import style from '../css/CardShopCart.module.css'

function CardShopCart({ setTotalPrice, product, index, onProductDataChange }) {
	const productPrice = parseFloat(product.price)
	const [price, setPrice] = useState(productPrice)
	const [pieceCount, setPieceCount] = useState(1)

	function handleIncrement() {
		setPieceCount(prev => prev + 1)
		setTotalPrice(prev => prev + productPrice)
	}

	useEffect(() => {
		setPrice(productPrice * pieceCount)
		onProductDataChange(index, { pieceCount, product })
	}, [pieceCount])

	function handleDecrement() {
		if (pieceCount > 1) {
			setPieceCount(prev => prev - 1)
			setTotalPrice(prev => prev - productPrice)
		}
	}

	function imgProduct(index) {
		return require(`../img/${index}.jpg`)
	}

	const productImg = imgProduct(index)
	return (
		<div className={style.cardWrapper}>
			<div className={style.imgwrapper}>
				<img src={productImg} alt='drugs' />
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
