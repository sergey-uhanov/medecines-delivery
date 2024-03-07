import { create } from 'zustand'

const shopCartStore = create(set => ({
	products: [],
	addProduct: product =>
		set(state => ({ products: [...state.products, product] })),
}))
export default shopCartStore
