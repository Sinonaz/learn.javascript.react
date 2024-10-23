import styles from "./restaurant.module.css"
import { Link, Outlet } from "react-router-dom"

export const Restaurant = ({ id, name }) => {
	return (
		<div className={styles.restaurant} key={id}>
			<h2 className={styles.name}>{name}</h2>

			<div className={styles.links}>
				<Link to={"menu"}>Menu</Link>

				<Link to={"reviews"}>Reviews</Link>
			</div>

			<Outlet />
		</div>
	)
}
