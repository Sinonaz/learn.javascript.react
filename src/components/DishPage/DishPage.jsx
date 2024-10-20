import { useParams } from "react-router-dom"
import { DishCounter } from "../DishCounter/DishCounter"
import { useAuth } from "../UserContext/use-auth"
import { useSelector } from "react-redux"
import { selectDishById } from "../../redux/dishes"

export const DishPage = () => {
	const { user } = useAuth()
	const { dishId } = useParams()
	const { name, price, ingredients } = useSelector(state =>
		selectDishById(state, dishId)
	)

	return (
		<div>
			<p>
				{name} - {price} $
			</p>

			{user.isAuth && <DishCounter id={dishId} />}

			{ingredients.length && (
				<>
					<p>Ingredients:</p>
					<ul>
						{ingredients.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</>
			)}
		</div>
	)
}
