import { useParams } from "next/navigation"
import { Reviews } from "../Reviews/Reviews"
import { ReviewForm } from "../ReviewForm/ReviewForm"
import { useAuth } from "../UserContext/use-auth"
import {
  useGetReviewsQuery,
  useGetUsersQuery,
} from "../../redux/services/api/api"

export const ReviewsPage = () => {
  const { restaurantId } = useParams()

  const { data, isLoading, isError } = useGetReviewsQuery(restaurantId)

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

      {user.isAuth && <ReviewForm restaurantId={restaurantId} />}
    </>
  )
}
