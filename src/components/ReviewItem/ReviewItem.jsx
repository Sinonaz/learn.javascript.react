import { useSelector } from "react-redux"
import styles from "./reviewItem.module.css"
import { selectReviewsById } from "../../redux/reviews"

export const ReviewItem = ({ id }) => {
	const { text } = useSelector(state => selectReviewsById(state, id))

	return (
		<li className={styles.reviewItem} key={id}>
			{text}
		</li>
	)
}
