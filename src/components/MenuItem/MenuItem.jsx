import { DishCounter } from "../DishCounter/DishCounter"
import styles from "./menuItem.module.css"

export const MenuItem = ({ id, name }) => (
	<li className={styles.menuItem} key={id}>
		{name}
		<DishCounter />
	</li>
)
