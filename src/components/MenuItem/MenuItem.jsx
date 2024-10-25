import styles from "./menuItem.module.css"
import { Link } from "react-router-dom"

export const MenuItem = ({ id, name }) => {
	return (
		<li className={styles.menuItem}>
			<Link to={`/dish/${id}`}>{name}</Link>
		</li>
	)
}
