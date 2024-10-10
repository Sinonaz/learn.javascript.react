import { useSelector } from "react-redux"
import { DishCounter } from "../DishCounter/DishCounter"
import { useAuth } from "../UserContext/use-auth"
import styles from "./menuItem.module.css"
import { selectDishesById } from "../../redux/dishes"

export const MenuItem = ({ id }) => {
	const { user } = useAuth()
	const { name } = useSelector(state => selectDishesById(state, id))

	return (
		<li className={styles.menuItem}>
			{name}
			{user.isAuth && <DishCounter />}
		</li>
	)
}
