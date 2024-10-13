import { useSelector } from "react-redux"
import { selectRestaurantList } from "../../redux/restaurants"
import { RestaurantTab } from "../RestaurantTab/RestaurantTab"
import styles from "./restaurantTabs.module.css"

export const RestaurantTabs = () => {
	const restaurants = useSelector(state => selectRestaurantList(state))

	return (
		<div className={styles.restaurantTabs}>
			{restaurants.map(({ id, name }) => (
				<RestaurantTab key={id} id={id} name={name} />
			))}
		</div>
	)
}
