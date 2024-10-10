import { Tab } from "../Tab/Tab"

export const RestaurantTab = ({ isActive, name, onClick }) => {
	return <Tab name={name} onClick={onClick} isActive={isActive} />
}
