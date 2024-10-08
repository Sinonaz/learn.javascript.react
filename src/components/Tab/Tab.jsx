import styles from "./tab.module.css"
import { Button } from "../Button/Button"

export const Tab = ({ tabId, name, changeItem, currentItem }) => (
	<Button
		className={styles.tab}
		text={name}
		disabled={currentItem.id === tabId}
		isActive={currentItem.id === tabId}
		onClick={() => changeItem(tabId)}
	/>
)
