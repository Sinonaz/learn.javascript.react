import { useSelector } from "react-redux"
import { Menu } from "../Menu/Menu"
import { ReviewForm } from "../ReviewForm/ReviewForm"
import { Reviews } from "../Reviews/Reviews"
import { useAuth } from "../UserContext/use-auth"
import styles from "./restaurant.module.css"
import { selectRestaurantById } from "../../redux/restaurants"

export const Restaurant = ({ id }) => {
	const restaurant = useSelector(state => selectRestaurantById(state, id))
	const { menu, reviews } = restaurant

	const { user } = useAuth()

	if (!restaurant) return null

	return (
		<div className={styles.restaurant} key={id}>
			<h2 className={styles.name}>{restaurant.name}</h2>

			<Menu menu={menu} />

			<Reviews reviews={reviews} />

			{user.isAuth && <ReviewForm />}
		</div>
	)
}
