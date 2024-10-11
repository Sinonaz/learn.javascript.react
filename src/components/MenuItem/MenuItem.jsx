import { useSelector } from "react-redux"
import { DishCounter } from "../DishCounter/DishCounter"
import { useAuth } from "../UserContext/use-auth"
import styles from "./menuItem.module.css"
import { selectDishById } from "../../redux/dishes"

export const MenuItem = ({ id }) => {
	const { user } = useAuth()
	const { name } = useSelector(state => selectDishById(state, id))

	return (
		<li className={styles.menuItem}>
			{name}
			{user.isAuth && <DishCounter id={id} />}
		</li>
	)
}
