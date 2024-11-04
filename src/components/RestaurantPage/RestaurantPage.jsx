import { useParams } from "next/navigation"
import { Restaurant } from "../Restaurant/Restaurant"
import { useGetRestaurantsQuery } from "../../redux/services/api/api"
import styles from "./restaurantPage.module.css"

export const RestaurantPage = ({ children }) => {
  const { restaurantId } = useParams()

  const { data, isLoading, isError } = useGetRestaurantsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data: data.find(restaurant => restaurant.id === restaurantId),
    }),
  })

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
    <div className={styles.restaurant}>
      <Restaurant id={data.id} name={data.name} />

      {children}
    </div>
  )
}
