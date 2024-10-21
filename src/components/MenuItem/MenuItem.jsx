import { useSelector } from "react-redux"
import styles from "./menuItem.module.css"
import { selectDishById } from "../../redux/dishes"
import { Link } from "react-router-dom"

export const MenuItem = ({ id }) => {
	const dish = useSelector(state => selectDishById(state, id))

	if (!dish) return null

	return (
		<li className={styles.menuItem}>
			<Link to={`/dish/${dish.id}`}>{dish.name}</Link>
		</li>
	)
}
