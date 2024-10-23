import { useSelector } from "react-redux"
import styles from "./reviewItem.module.css"
import { selectReviewById } from "../../redux/reviews"

export const ReviewItem = ({ id }) => {
	const review = useSelector(state => selectReviewById(state, id))

	if (!review) return null

	return (
		<li className={styles.reviewItem} key={id}>
			{review.text}
		</li>
	)
}
