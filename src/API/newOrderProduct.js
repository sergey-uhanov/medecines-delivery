import { api } from './api'
function fetchNewproducts(newProduct) {
	try {
		const response = fetch(`${api}/order`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newProduct),
		})
	} catch (error) {
		console.log(error)
	}
}
export default fetchNewproducts
