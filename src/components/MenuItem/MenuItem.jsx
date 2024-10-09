import { DishCounter } from "../DishCounter/DishCounter"
import { useAuth } from "../UserContext/use-auth"
import styles from "./menuItem.module.css"

export const MenuItem = ({ id, name }) => {
	const { user } = useAuth()

	return (
		<li className={styles.menuItem} key={id}>
			{name}
			{user.isAuth && <DishCounter />}
		</li>
	)
}
