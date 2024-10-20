import { useSelector } from "react-redux"
import styles from "./restaurant.module.css"
import { selectRestaurantById } from "../../redux/restaurants"
import { Link, Outlet } from "react-router-dom"

export const Restaurant = ({ id }) => {
	const restaurant = useSelector(state => selectRestaurantById(state, id))

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
