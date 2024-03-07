import { useState } from 'react'
import style from '../css/ShopList.module.css'

function PharmacyLIst({ pharmacyArray, handleShowProducts }) {
	const [clickIndex, setClickIndex] = useState(2)
	function temp(id) {
		handleShowProducts(id)
		setClickIndex(id)
	}
	return (
		<aside className={style.sideBar}>
			<h3>Shops:</h3>
			<nav>
				<ul>
					{pharmacyArray &&
						pharmacyArray.map(item => (
							<li
								className={style.shopItem}
								onClick={() => temp(item.id)}
								key={item.id}
							>
								<div
									className={item.id == clickIndex ? 'item-red' : 'item-black'}
								>
									{item.name}
								</div>
							</li>
						))}
				</ul>
			</nav>
		</aside>
	)
}
export default PharmacyLIst
