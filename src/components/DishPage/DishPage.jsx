import { useParams } from "react-router-dom"
import { DishCounter } from "../DishCounter/DishCounter"
import { useAuth } from "../UserContext/use-auth"
import { selectDishById, selectDishRequestStatus } from "../../redux/dishes"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getDish } from "../../redux/dishes/get-dish"
import { RequestStatus } from "../../../utils/consts"

export const DishPage = () => {
	const dispatch = useDispatch()
	const { user } = useAuth()
	const { dishId } = useParams()
	const dish = useSelector(state => selectDishById(state, dishId))
	const status = useSelector(selectDishRequestStatus)

	useEffect(() => {
		dispatch(getDish(dishId))
	}, [dispatch, dishId])

	if (!dish) return null

	if (status === RequestStatus.IDLE || status === RequestStatus.PENDING) {
		return <div>Loading</div>
	}

	if (status === RequestStatus.REJECTED) {
		return <div>Error</div>
	}

	const { price, name, ingredients } = dish

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
