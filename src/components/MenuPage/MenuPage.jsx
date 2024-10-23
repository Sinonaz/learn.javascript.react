import { useParams } from "react-router-dom"
import { Menu } from "../Menu/Menu"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getDishes } from "../../redux/dishes/get-dishes"
import { selectDishesIds } from "../../redux/dishes"
import { RequestStatus } from "../../../utils/consts"
import { selectRequestStatus } from "../../redux/dishes"

export const MenuPage = () => {
	const dispatch = useDispatch()
	const { activeRestaurantId } = useParams()
	const menu = useSelector(selectDishesIds)
	const status = useSelector(selectRequestStatus)

	useEffect(() => {
		dispatch(getDishes(activeRestaurantId))
	}, [dispatch, activeRestaurantId])

	if (status === RequestStatus.IDLE || status === RequestStatus.PENDING) {
		return <div>Loading</div>
	}

	if (status === RequestStatus.REJECTED) {
		return <div>Error</div>
	}

	if (!menu) return null

	return <Menu menu={menu} />
}
