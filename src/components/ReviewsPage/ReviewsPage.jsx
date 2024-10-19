import { useParams } from "react-router-dom"
import { Reviews } from "../Reviews/Reviews"
import { selectRestaurantById } from "../../redux/restaurants"
import { useSelector } from "react-redux"
import { ReviewForm } from "../ReviewForm/ReviewForm"
import { useAuth } from "../UserContext/use-auth"

export const ReviewsPage = () => {
	const { activeRestaurantId } = useParams()
	const { reviews } = useSelector(state =>
		selectRestaurantById(state, activeRestaurantId)
	)
	const { user } = useAuth()

	return (
		<>
			<Reviews reviews={reviews} />

			{user.isAuth && <ReviewForm />}
		</>
	)
}
