import { Menu } from "../Menu/Menu"
import { ReviewForm } from "../ReviewForm/ReviewForm"
import { Reviews } from "../Reviews/Reviews"
import { useAuth } from "../UserContext/use-auth"
import styles from "./restaurant.module.css"

export const Restaurant = ({ id, name, menu, reviews }) => {
	const { user } = useAuth()

	if (!name) return null

	return (
		<div className={styles.restaurant} key={id}>
			<h2 className={styles.name}>{name}</h2>

			<Menu menu={menu} />

			<Reviews reviews={reviews} />

			{user.isAuth && <ReviewForm />}
		</div>
	)
}
