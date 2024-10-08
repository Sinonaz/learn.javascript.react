import { Tab } from "../Tab/Tab"
import styles from "./tabs.module.css"

export const Tabs = ({ items, changeItem, currentItem }) => {
	return (
		<div className={styles.tabs}>
			{items.map(({ id, name }) => (
				<Tab
					key={id}
					tabId={id}
					name={name}
					changeItem={changeItem}
					currentItem={currentItem}
				/>
			))}
		</div>
	)
}
