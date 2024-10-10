import { ReviewItem } from "../ReviewItem/ReviewItem"
import styles from "./reviews.module.css"

export const Reviews = ({ reviews }) => {
	return (
		<>
			<h3>Reviews</h3>

			<ul className={styles.reviews}>
				{reviews.map(id => (
					<ReviewItem key={id} id={id} />
				))}
			</ul>
		</>
	)
}
