import { useDispatch, useSelector } from "react-redux"
import styles from "./menuItem.module.css"
import { selectDishById, selectDishRequestStatus } from "../../redux/dishes"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { getDish } from "../../redux/dishes/get-dish"
import { RequestStatus } from "../../../utils/consts"

export const MenuItem = ({ id }) => {
	const dispatch = useDispatch()
	const dish = useSelector(state => selectDishById(state, id))
	const status = useSelector(selectDishRequestStatus)

	useEffect(() => {
		dispatch(getDish(id))
	}, [dispatch, id])

	if (!dish) return null

	if (status === RequestStatus.IDLE || status === RequestStatus.PENDING) {
		return <div>Loading</div>
	}

	if (status === RequestStatus.REJECTED) {
		return <div>Error</div>
	}

	return (
		<li className={styles.menuItem}>
			<Link to={`/dish/${dish.id}`}>{dish.name}</Link>
		</li>
	)
}
