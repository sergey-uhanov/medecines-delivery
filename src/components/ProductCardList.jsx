import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import style from '../css/ProductCardList.module.css'
import sortFirstHigh from '../helpers/sortFirstHigh'
import sortFirstLow from '../helpers/sortFirstLow'
import SelectSorted from './SelectSorted'

function ProductCardList({ productsArray, setProductsArray, trigerChenge }) {
	const [sortedType, setSortedType] = useState('added_dateNew')

	useEffect(() => {
		switch (sortedType) {
			case 'added_dateNew':
				setProductsArray(sortFirstLow(productsArray, 'added_date'))
				break
			case 'priceLow':
				setProductsArray(sortFirstLow(productsArray, 'price'))
				break
			case 'added_dateOld':
				setProductsArray(sortFirstHigh(productsArray, 'added_date'))
				break
			case 'priceHigh':
				setProductsArray(sortFirstHigh(productsArray, 'price'))
				break

			default:
				break
		}
	}, [sortedType])
	useEffect(() => {
		switch (sortedType) {
			case 'added_dateNew':
				setProductsArray(sortFirstLow(productsArray, 'added_date'))
				break
			case 'priceLow':
				setProductsArray(sortFirstLow(productsArray, 'price'))
				break
			case 'added_dateOld':
				setProductsArray(sortFirstHigh(productsArray, 'added_date'))
				break
			case 'priceHigh':
				setProductsArray(sortFirstHigh(productsArray, 'price'))
				break
			default:
				break
		}
	}, [trigerChenge])

	return (
		<div className={style.productCard}>
			<SelectSorted setSortedType={setSortedType} />
			<div className={style.productCardList}>
				{productsArray &&
					productsArray.map((item, index) => (
						<ProductCard key={index} productObj={item} index={index} />
					))}
			</div>
		</div>
	)
}
export default ProductCardList
