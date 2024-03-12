import { NavLink } from 'react-router-dom'
import style from '../css/Navigation.module.css'
import shopCartStore from '../store/shopeCartStore.js'

function Navigation() {
	const product = shopCartStore(state => state.products)
	return (
		<div className={style.nav}>
			<NavLink
				exact
				to='/'
				className={style.link}
				activeClassName={style.active}
			>
				Shop
			</NavLink>
			<NavLink
				exact
				to='/ShopingCart'
				className={style.link}
				activeClassName={style.active}
			>
				Shoping Cart ({product.length})
			</NavLink>
		</div>
	)
}

export default Navigation
