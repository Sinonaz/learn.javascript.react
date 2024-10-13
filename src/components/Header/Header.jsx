import { Clock } from "../Clock/Clock"
import styles from "./header.module.css"

export const Header = () => (
	<header className={styles.header}>
		Header <Clock />
	</header>
)
