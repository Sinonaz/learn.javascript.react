import { useParams } from "react-router-dom"
import { Menu } from "../Menu/Menu"
import { selectRestaurantById } from "../../redux/restaurants"
import { useSelector } from "react-redux"

export const MenuPage = () => {
	const { activeRestaurantId } = useParams()
	const { menu } = useSelector(state =>
		selectRestaurantById(state, activeRestaurantId)
	)

	return <Menu menu={menu} />
}
