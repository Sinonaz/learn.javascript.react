import { useSelector } from "react-redux"
import styles from "./menuItem.module.css"
import { selectDishById } from "../../redux/dishes"
import { Link } from "react-router-dom"

export const MenuItem = ({ id }) => {
	const { name } = useSelector(state => selectDishById(state, id))

	return (
		<li className={styles.menuItem}>
			<Link to={`/dish/${id}`}>{name}</Link>
		</li>
	)
}
