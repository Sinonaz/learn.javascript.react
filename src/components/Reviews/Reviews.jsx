import { ReviewItem } from "../ReviewItem/ReviewItem"
import styles from "./reviews.module.css"

export const Reviews = ({ reviews }) => {
	return (
		<div>
			<ul className={styles.reviews}>
				{reviews.map(id => (
					<ReviewItem key={id} id={id} />
				))}
			</ul>
		</div>
	)
}
