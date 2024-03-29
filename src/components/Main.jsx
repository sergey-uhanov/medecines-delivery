import { useEffect, useState } from 'react'
import fetchShops from '../API/PharmacyApi.js'
import fetchProducts from '../API/ProductsListApi.js'
import PharmacyLIst from '../components/PharmacyLIst.jsx'
import ProductCardList from '../components/ProductCardList.jsx'
import style from '../css/Main.module.css'

function Main() {
	const [pharmacyArray, setPharmacyArray] = useState([])
	const [productsArray, setProductsArray] = useState()
	const [trigerChenge, setTrigerChenge] = useState(true)
	const [isloading, setIsloading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchShops()
			setPharmacyArray(data)
			handleShowProducts(2)
		}

		fetchData()
		setTimeout(() => {
			setIsloading(false)
		}, 1000)
	}, [])

	async function handleShowProducts(id) {
		const data = await fetchProducts(id)
		setProductsArray(data)
		setTrigerChenge(!trigerChenge)
	}
	return (
		<>
			{isloading ? (
				<div class={style.customLoader}></div>
			) : (
				<section className='main'>
					<PharmacyLIst
						handleShowProducts={handleShowProducts}
						pharmacyArray={pharmacyArray}
					/>
					<ProductCardList
						productsArray={productsArray}
						setProductsArray={setProductsArray}
						trigerChenge={trigerChenge}
					/>
				</section>
			)}
		</>
	)
}

export default Main
