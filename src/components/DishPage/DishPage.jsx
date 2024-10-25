import { useParams } from "react-router-dom"
import { DishCounter } from "../DishCounter/DishCounter"
import { useAuth } from "../UserContext/use-auth"
import { useGetDishQuery } from "../../redux/services/api/api"

export const DishPage = () => {
	const { user } = useAuth()
	const { dishId } = useParams()

	const { data, isLoading, isError } = useGetDishQuery(dishId)

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
			<p>
				{data.name} - {data.price} $
			</p>

			{user.isAuth && <DishCounter id={data.id} />}

			{data.ingredients.length && (
				<>
					<p>Ingredients:</p>
					<ul>
						{data.ingredients.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</>
			)}
		</div>
	)
}
