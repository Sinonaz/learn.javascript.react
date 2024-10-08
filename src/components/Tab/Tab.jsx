import classNames from "classnames"
import styles from "./tab.module.css"

export const Tab = ({ tabId, name, changeItem, currentItem }) => (
	<button
		className={classNames(
			styles.tab,
			currentItem.id === tabId && styles.active
		)}
		type='button'
		disabled={currentItem.id === tabId}
		onClick={() => changeItem(tabId)}
	>
		{name}
	</button>
)
