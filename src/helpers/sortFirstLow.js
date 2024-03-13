function sortFirstLow(arr, objectField) {
	if (arr.length <= 1) {
		return arr
	}
	const pivot = arr[0]
	const left = []
	const right = []

	for (let i = 1; i < arr.length; i++) {
		let fieldValue = arr[i][objectField]
		let pivotValue = pivot[objectField]

		if (!isNaN(parseFloat(fieldValue)) && isFinite(fieldValue)) {
			fieldValue = parseFloat(fieldValue)
			pivotValue = parseFloat(pivotValue)
		} else {
			fieldValue = new Date(fieldValue)
			pivotValue = new Date(pivotValue)
		}

		if (fieldValue < pivotValue) {
			left.push(arr[i])
		} else {
			right.push(arr[i])
		}
	}

	return [
		...sortFirstLow(left, objectField),
		pivot,
		...sortFirstLow(right, objectField),
	]
}

export default sortFirstLow
