import { Outlet } from "react-router-dom"
import { RestaurantTab } from "../RestaurantTab/RestaurantTab"
import { useGetRestaurantsQuery } from "../../redux/services/api/api"

export const RestaurantsPage = () => {
	const { data, isFetching, isError } = useGetRestaurantsQuery(undefined, {
		refetchOnMountOrArgChange: true,
	})

	if (isFetching) {
		return <div>Loading</div>
	}

	if (isError) {
		return <div>Error</div>
	}

	if (!data.length) {
		return null
	}

	return (
		<>
			<div style={{ display: "flex" }}>
				{data.map(({ id, name }) => (
					<RestaurantTab key={id} id={id} name={name} />
				))}
			</div>

			<Outlet />
		</>
	)
}
