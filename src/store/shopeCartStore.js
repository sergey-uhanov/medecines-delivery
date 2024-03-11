import { create } from 'zustand'

const shopCartStore = create(set => ({
	products: [],
	addProduct: product =>
		set(state => {
			// Проверка на наличие продукта в корзине
			if (!state.products.some(p => p.id === product.id)) {
				return { products: [...state.products, product] }
			}
			return state
		}),
	clearStore: product => set(state => ({ products: [] })),
}))
export default shopCartStore
