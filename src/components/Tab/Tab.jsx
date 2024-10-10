import styles from "./tab.module.css"
import { Button } from "../Button/Button"

export const Tab = ({ name, onClick, isActive }) => (
	<Button
		className={styles.tab}
		text={name}
		isActive={isActive}
		onClick={onClick}
	/>
)
