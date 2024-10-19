import { NavLink } from "react-router-dom"
import styles from "./restaurantTab.module.css"
import classNames from "classnames"
import { useSelector } from "react-redux"
import { selectRestaurantById } from "../../redux/restaurants"

export const RestaurantTab = ({ id }) => {
	const { name } = useSelector(state => selectRestaurantById(state, id))
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
