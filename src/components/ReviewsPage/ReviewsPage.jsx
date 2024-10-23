import { useParams } from "react-router-dom"
import { Reviews } from "../Reviews/Reviews"
import { selectRestaurantById } from "../../redux/restaurants"
import { selectRequestStatus } from "../../redux/reviews"
import { useDispatch, useSelector } from "react-redux"
import { ReviewForm } from "../ReviewForm/ReviewForm"
import { useAuth } from "../UserContext/use-auth"
import { useEffect } from "react"
import { getReviews } from "../../redux/reviews/get-reviews"
import { RequestStatus } from "../../../utils/consts"
import { getUsers } from "../../redux/users/get-users"

export const ReviewsPage = () => {
	const dispatch = useDispatch()
	const { activeRestaurantId } = useParams()
	const { reviews } = useSelector(state =>
		selectRestaurantById(state, activeRestaurantId)
	)
	const { user } = useAuth()

	useEffect(() => {
		dispatch(getReviews(activeRestaurantId))
		dispatch(getUsers())
	}, [dispatch, activeRestaurantId])

	useEffect(() => {
		dispatch(getUsers())
	}, [dispatch])

	const status = useSelector(selectRequestStatus)

	if (status === RequestStatus.IDLE || status === RequestStatus.PENDING) {
		return <div>Loading</div>
	}

	if (status === RequestStatus.REJECTED) {
		return <div>Error</div>
	}

	return (
		<>
			<Reviews reviews={reviews} />

			{user.isAuth && <ReviewForm />}
		</>
	)
}
