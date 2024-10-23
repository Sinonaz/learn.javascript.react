import { DishCounter } from "../DishCounter/DishCounter"
import { useGetDishQuery } from "../../redux/services/api/api"

export const CartItem = ({ id, amount }) => {
	const { data, isLoading, isError } = useGetDishQuery(id)

	if (isLoading) {
		return <div>Loading</div>
	}

	if (isError) {
		return <div>Error</div>
	}

	if (!data) {
		return null
	}

	return (
		<div>
			<div>
				{data.name} - {amount}
			</div>
			<DishCounter id={id} />
		</div>
	)
}
