import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import style from '../css/ProductCardList.module.css'
import sortFirstHigh from '../helpers/sortFirstHigh'
import sortFirstLow from '../helpers/sortFirstLow'
import SelectSorted from './SelectSorted'

function ProductCardList({ productsArray, setProductsArray, trigerChenge }) {
	const localStorFavoritelist = localStorage.getItem('Favoritelist')
	let templist

	if (localStorFavoritelist !== null) {
		templist = JSON.parse(localStorFavoritelist)
	} else {
		templist = []
	}
	const [sortedType, setSortedType] = useState('added_dateNew')
	const [favariteIdList, setFavoriteIdList] = useState(templist)

	function isFavoriteItem(id) {
		return favariteIdList.some(element => element === id)
	}

	function updateFavoriteState(id, isFavorite) {
		const newFavoriteIdList = isFavorite
			? [...favariteIdList, id]
			: favariteIdList.filter(favId => favId !== id)
		setFavoriteIdList(newFavoriteIdList)
	}
	function selectingDesiredSorting(array) {
		let temp
		switch (sortedType) {
			case 'added_dateNew':
				temp = sortFirstLow(array, 'added_date')

				break
			case 'priceLow':
				temp = sortFirstLow(array, 'price')
				break
			case 'added_dateOld':
				temp = sortFirstHigh(array, 'added_date')
				break
			case 'priceHigh':
				temp = sortFirstHigh(array, 'price')
				break
			default:
				throw new Error('incorrect sorting type')
		}

		return temp
	}
	function sortingFavoritAndOtherProducts(commonArr, favoriteIdList) {
		if (commonArr && commonArr.length !== 0) {
			if (favariteIdList.length !== 0) {
				const favoriteProducts = commonArr.filter(item =>
					favoriteIdList.includes(item.id)
				)
				const otherProducts = commonArr.filter(
					item => !favoriteProducts.some(favItem => favItem.id === item.id)
				)
				const sortedFavoriteProducts = selectingDesiredSorting(favoriteProducts)
				const sortedOtherProducts = selectingDesiredSorting(otherProducts)
				let productsArray = [...sortedFavoriteProducts, ...sortedOtherProducts]
				setProductsArray(productsArray)
			} else {
				let productsList = selectingDesiredSorting(productsArray)

				setProductsArray(productsList)
			}
		}
	}

	useEffect(() => {
		sortingFavoritAndOtherProducts(productsArray, favariteIdList)
	}, [sortedType])

	useEffect(() => {
		sortingFavoritAndOtherProducts(productsArray, favariteIdList)
	}, [trigerChenge])

	return (
		<div className={style.productCard}>
			<SelectSorted setSortedType={setSortedType} />
			<div className={style.productCardList}>
				{productsArray &&
					productsArray.map((item, index) => (
						<ProductCard
							key={index}
							productObj={item}
							index={index}
							isFavorite={isFavoriteItem(item.id)}
							updateFavoriteState={updateFavoriteState}
						/>
					))}
			</div>
		</div>
	)
}
export default ProductCardList
