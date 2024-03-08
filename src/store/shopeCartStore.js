import { create } from 'zustand'

const shopCartStore = create(set => ({
	products: [],
	addProduct: product =>
		set(state => ({ products: [...state.products, product] })),
	clearStore: product => set(state => ({ products: [] })),
}))
export default shopCartStore
