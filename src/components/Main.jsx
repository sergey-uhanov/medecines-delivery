import { useEffect, useState } from 'react'
import fetchShops from '../API/PharmacyApi.js'
import fetchProducts from '../API/ProductsListApi.js'
import PharmacyLIst from '../components/PharmacyLIst.jsx'
import ProductCardList from '../components/ProductCardList.jsx'
import style from '../css/Main.module.css'

function Main() {
	const [pharmacyArray, setPharmacyArray] = useState([])
	const [productsArray, setProductsArray] = useState()
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
		}, 2000)
	}, [])

	async function handleShowProducts(id) {
		const data = await fetchProducts(id)
		setProductsArray(data)
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
					<ProductCardList productsArray={productsArray} />
				</section>
			)}
		</>
	)
}

export default Main
