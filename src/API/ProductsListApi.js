import { api } from './api'
async function fetchProducts(id) {
	try {
		const response = await fetch(`${api}/products/${id}`)

		if (!response.ok) {
			throw new Error('Ошибка при получении данных')
		}

		const shops = await response.json()

		// Дальнейшая обработка полученных данных

		return shops
	} catch (error) {
		console.error('Произошла ошибка:', error)
		// Можно добавить обработку ошибок
	}
}

export default fetchProducts
