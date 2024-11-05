import { useParams } from "next/navigation"
import { useGetDishesQuery } from "../../redux/services/api/api"
import { MenuItem } from "../MenuItem/MenuItem"

export const MenuPage = () => {
  const { restaurantId } = useParams()

  const { data, isLoading, isError } = useGetDishesQuery(restaurantId)

  if (isLoading) {
    return <div>Loading</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  if (!data) return null

  return (
    <>
      {data.map(({ name, id }) => (
        <MenuItem key={id} name={name} id={id} />
      ))}
    </>
  )
}
