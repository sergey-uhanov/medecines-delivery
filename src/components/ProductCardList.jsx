import ProductCard from '../components/ProductCard'
import style from '../css/ProductCardList.module.css'
function ProductCardList({ productsArray }) {
	return (
		<div className={style.productCardList}>
			{productsArray &&
				productsArray.map(item => (
					<div className=''>
						<ProductCard productObj={item} />
					</div>
				))}
		</div>
	)
}
export default ProductCardList
