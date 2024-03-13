import style from '../css/SelectSorted.module.css'
function SelectSorted({ setSortedType }) {
	function handleChange(event) {
		setSortedType(event.target.value)
	}
	return (
		<div className={style.wrapper}>
			<label className={style.label} htmlFor='selectType'>
				Sorted by
			</label>
			<select className={style.select} id='selectType' onChange={handleChange}>
				<option className={style.item} value='added_dateNew'>
					date(first new)
				</option>
				<option className={style.item} value='added_dateOld'>
					date(first old)
				</option>
				<option className={style.item} value='priceLow'>
					price(first low)
				</option>
				<option className={style.item} value='priceHigh'>
					price(first high)
				</option>
			</select>
		</div>
	)
}

export default SelectSorted
