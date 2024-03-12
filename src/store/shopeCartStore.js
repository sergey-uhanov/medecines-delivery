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
	deleteItem: index =>
		set(state => ({ products: state.products.filter((_, i) => i !== index) })),
	clearStore: () => set({ products: [] }),
}))
export default shopCartStore
