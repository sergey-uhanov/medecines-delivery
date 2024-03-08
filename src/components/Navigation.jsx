import { Link } from 'react-router-dom'
import style from '../css/Navigation.module.css'
import shopCartStore from '../store/shopeCartStore.js'
function Navigation() {
	const addProduct = shopCartStore(state => state.products)
	return (
		<div className={style.nav}>
			<Link className={style.link} to='/'>
				Shop
			</Link>
			<Link className={style.link} to='/ShopingCart'>
				Shoping Cart ({addProduct.length})
			</Link>
		</div>
	)
}

export default Navigation
