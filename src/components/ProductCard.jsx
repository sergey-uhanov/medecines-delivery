import style from '../css/ProductCard.module.css'
import shopCartStore from '../store/shopeCartStore.js'

function ProductCard({ productObj }) {
	const addProduct = shopCartStore(state => state.addProduct)

	function getRandomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min
	}
	const imgProduct = require(`../img/${getRandomNumber(1, 16)}.jpg`)
	return (
		<div className={style.cardWrapper}>
			<div className={style.imgWrapper}>
				<img src={imgProduct} alt='drugs' className='' />
			</div>
			<div className={style.title}>{productObj.name}</div>
			<div className={style.btnWrapper}>
				<button onClick={() => addProduct(productObj)} className={style.addBtn}>
					add to cart
				</button>
			</div>
		</div>
	)
}
export default ProductCard
