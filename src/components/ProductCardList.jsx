import ProductCard from '../components/ProductCard'
import style from '../css/ProductCardList.module.css'
function ProductCardList({ productsArray }) {
	return (
		<div className={style.productCardList}>
			{productsArray &&
				productsArray.map((item, index) => (
					<ProductCard key={index} productObj={item} index={index} />
				))}
		</div>
	)
}
export default ProductCardList
