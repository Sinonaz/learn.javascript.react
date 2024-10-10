import { useSelector } from "react-redux"
import { selectDishById } from "../../redux/dishes"
import { DishCounter } from "../DishCounter/DishCounter"

export const CartItem = ({ id, amount }) => {
	const { name } = useSelector(state => selectDishById(state, id)) || {}

	if (!name) {
		return null
	}

	return (
		<div>
			<div>
				{name} - {amount}
			</div>
			<DishCounter id={id} />
		</div>
	)
}
