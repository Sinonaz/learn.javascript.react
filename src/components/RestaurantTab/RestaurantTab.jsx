import { NavLink } from "react-router-dom"
import styles from "./restaurantTab.module.css"
import classNames from "classnames"

export const RestaurantTab = ({ id, name }) => {
	return (
		<NavLink
			className={({ isActive }) =>
				classNames(styles.restaurantTab, isActive && styles.active)
			}
			to={id}
		>
			{name}
		</NavLink>
	)
}
