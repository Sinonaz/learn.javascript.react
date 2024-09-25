import { Tab } from "./Tab"

export const Tabs = ({ items, changeItem }) =>
	items.map(({ id, name }) => (
		<Tab key={id} tabId={id} name={name} changeItem={changeItem} />
	))
