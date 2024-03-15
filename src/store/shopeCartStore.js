import { create } from 'zustand'
let temp = localStorage.getItem('shopCartList')
if (temp !== null) {
	temp = JSON.parse(temp)
} else {
	temp = []
}
const shopCartStore = create(set => ({
	products: temp,
	addProduct: product =>
		set(state => {
			// Проверка на наличие продукта в корзине
			if (!state.products.some(p => p.id === product.id)) {
				return { products: [...state.products, product] }
			}
			return state
		}),
	deleteItem: id =>
		set(state => ({ products: state.products.filter(item => item.id !== id) })),
	clearStore: () => set({ products: [] }),
}))
export default shopCartStore
