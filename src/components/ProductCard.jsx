import { useEffect, useState } from 'react'
import style from '../css/ProductCard.module.css'
import shopCartStore from '../store/shopeCartStore.js'
function ProductCard({ productObj }) {
	const shopCartArr = shopCartStore(state => state.products)
	const [isActiveBtn, setIsActiveBtn] = useState(false)
	useEffect(() => {
		if (shopCartArr.some(p => p.id === productObj.id)) {
			setIsActiveBtn(true)
		}
	}, [])
	const addProduct = shopCartStore(state => state.addProduct)
	function clickBtn() {
		addProduct(productObj)
		setIsActiveBtn(true)
	}

	function getRandomNumber(min, max) {
		return parseInt(productObj.price)
	}
	const imgProduct = require(`../img/${getRandomNumber(1, 16)}.jpg`)
	return (
		<div className={style.cardWrapper}>
			<div className={style.imgWrapper}>
				<img src={imgProduct} alt='drugs' className='' />
			</div>
			<div>
				<div className={style.title}>{productObj.name}</div>
				<div className={style.footerWrapper}>
					<span>{productObj.price} $</span>
					<button
						onClick={() => clickBtn()}
						className={isActiveBtn ? style.activeBtn : style.addBtn}
					>
						add to cart
					</button>
				</div>
			</div>
		</div>
	)
}
export default ProductCard
