import { api } from './api'

async function fetchNewCustomer(newCustomer) {
	try {
		const response = await fetch(`${api}/customer`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newCustomer),
		})

		const data = await response.json()
		return data // Возвращаем данные
	} catch (error) {
		console.log(error)
	}
}

export default fetchNewCustomer
