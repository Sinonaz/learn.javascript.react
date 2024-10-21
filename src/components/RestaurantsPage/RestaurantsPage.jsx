import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
	selectRequestStatus,
	selectRestaurantsIds,
} from "../../redux/restaurants"

import { Outlet } from "react-router-dom"
import { getRestaurants } from "../../redux/restaurants/get-restaurants"
import { RestaurantTab } from "../RestaurantTab/RestaurantTab"
import { RequestStatus } from "../../../utils/consts"

export const RestaurantsPage = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getRestaurants())
	}, [dispatch])

	const restaurantsIds = useSelector(selectRestaurantsIds)
	const status = useSelector(selectRequestStatus)

	if (status === RequestStatus.IDLE || status === RequestStatus.PENDING) {
		return <div>Loading</div>
	}

	if (status === RequestStatus.REJECTED) {
		return <div>Error</div>
	}

	return (
		<>
			<div style={{ display: "flex" }}>
				{restaurantsIds.map(id => (
					<RestaurantTab key={id} id={id} />
				))}
			</div>

			<Outlet />
		</>
	)
}
