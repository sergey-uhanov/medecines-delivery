import { useEffect, useState } from 'react'
import style from '../css/ProductCard.module.css'
import shopCartStore from '../store/shopeCartStore.js'
function ProductCard({
	productObj,
	isFavorite,
	handleAddFavorite,
	updateFavoriteState,
}) {
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
		let localStorageShopCartString = localStorage.getItem('shopCartList')

		if (localStorageShopCartString !== null) {
			const localStorageShopCart = JSON.parse(localStorageShopCartString)
			const updateShopCart = [...localStorageShopCart, productObj]
			localStorage.setItem('shopCartList', JSON.stringify(updateShopCart))
		} else {
			localStorage.setItem('shopCartList', JSON.stringify([productObj]))
		}
	}

	function handleAddFavorite(id) {
		let temp = JSON.parse(localStorage.getItem('Favoritelist'))
		if (temp !== null) {
			const index = temp.findIndex(el => el === id)
			if (index !== -1) {
				temp.splice(index, 1)
			} else {
				temp.push(id)
			}
		} else {
			temp = [id]
		}

		localStorage.setItem('Favoritelist', JSON.stringify(temp))

		const updatedIsFavorite = temp.includes(id)
		updateFavoriteState(id, updatedIsFavorite)
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
			<div
				onClick={() => handleAddFavorite(productObj.id)}
				className={style.ggHeart}
			>
				{isFavorite ? '💛' : '🖤'}
			</div>
		</div>
	)
}
export default ProductCard
