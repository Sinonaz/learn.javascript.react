import { useParams } from "react-router-dom"
import { Reviews } from "../Reviews/Reviews"
import { ReviewForm } from "../ReviewForm/ReviewForm"
import { useAuth } from "../UserContext/use-auth"
import {
	useGetReviewsQuery,
	useGetUsersQuery,
} from "../../redux/services/api/api"

export const ReviewsPage = () => {
	const { activeRestaurantId } = useParams()

	const { data, isLoading, isError } = useGetReviewsQuery(activeRestaurantId)

	useGetUsersQuery()

	const { user } = useAuth()

	if (isLoading) {
		return <div>Loading</div>
	}

	if (isError) {
		return <div>Error</div>
	}

	if (!data) return null

	return (
		<>
			<Reviews reviews={data} />

			{user.isAuth && <ReviewForm restaurantId={activeRestaurantId} />}
		</>
	)
}
