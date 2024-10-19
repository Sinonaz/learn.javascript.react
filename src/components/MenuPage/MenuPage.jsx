import { useParams } from "react-router-dom"
import { Menu } from "../Menu/Menu"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getDishes } from "../../redux/dishes/get-dishes"
import { selectDishesIds } from "../../redux/dishes"

export const MenuPage = () => {
	const dispatch = useDispatch()
	const { activeRestaurantId } = useParams()
	const menu = useSelector(selectDishesIds)

	useEffect(() => {
		dispatch(getDishes(activeRestaurantId))
	}, [dispatch, activeRestaurantId])

	if (!menu) return null

	return <Menu menu={menu} />
}
