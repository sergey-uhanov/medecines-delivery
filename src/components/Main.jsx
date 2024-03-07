import { useEffect, useState } from 'react'
import fetchShops from '../API/PharmacyApi.js'
import fetchProducts from '../API/ProductsListApi.js'
import PharmacyLIst from '../components/PharmacyLIst.jsx'
import ProductCardList from '../components/ProductCardList.jsx'

function Main() {
	const [pharmacyArray, setPharmacyArray] = useState([])
	const [productsArray, setProductsArray] = useState()

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchShops()
			setPharmacyArray(data)
			handleShowProducts(2)
		}

		fetchData()
	}, [])

	async function handleShowProducts(id) {
		const data = await fetchProducts(id)
		setProductsArray(data)
	}
	return (
		<section className='main'>
			<PharmacyLIst
				handleShowProducts={handleShowProducts}
				pharmacyArray={pharmacyArray}
			/>
			<ProductCardList productsArray={productsArray} />
		</section>
	)
}

export default Main
