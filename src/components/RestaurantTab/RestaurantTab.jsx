import { NavLink } from "react-router-dom"
import styles from "./restaurantTab.module.css"
import classNames from "classnames"

export const RestaurantTab = ({ id, name }) => {
	return (
		<NavLink
			className={({ isActive }) =>
				isActive
					? classNames(styles.restaurantTab, styles.active)
					: classNames(styles.restaurantTab)
			}
			to={id}
		>
			{name}
		</NavLink>
	)
}
