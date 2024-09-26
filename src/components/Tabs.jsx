import { Tab } from "./Tab"

export const Tabs = ({ items, changeItem, currentItem }) =>
	items.map(({ id, name }) => (
		<Tab
			key={id}
			tabId={id}
			name={name}
			changeItem={changeItem}
			currentItem={currentItem}
		/>
	))
