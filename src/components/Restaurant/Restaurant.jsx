import { useDispatch, useSelector } from "react-redux"
import styles from "./restaurant.module.css"
import {
	selectRestaurantById,
	selectRestaurantRequestStatus,
} from "../../redux/restaurants"
import { Link, Outlet } from "react-router-dom"
import { useEffect } from "react"
import { getRestaurant } from "../../redux/restaurants/get-restaurant"
import { RequestStatus } from "../../../utils/consts"

export const Restaurant = ({ id }) => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getRestaurant(id))
	}, [dispatch, id])

	const restaurant = useSelector(state => selectRestaurantById(state, id))
	const status = useSelector(selectRestaurantRequestStatus)

	if (status === RequestStatus.IDLE || status === RequestStatus.PENDING) {
		return <div>Loading</div>
	}

	if (status === RequestStatus.REJECTED) {
		return <div>Error</div>
	}

	if (!restaurant) return null

	return (
		<div className={styles.restaurant} key={id}>
			<h2 className={styles.name}>{restaurant.name}</h2>

			<div className={styles.links}>
				<Link to={"menu"}>Menu</Link>

				<Link to={"reviews"}>Reviews</Link>
			</div>

			<Outlet />
		</div>
	)
}
