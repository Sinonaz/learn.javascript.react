import { ReviewItem } from "../ReviewItem/ReviewItem"
import styles from "./reviews.module.css"

export const Reviews = ({ reviews }) => {
	return (
		<div>
			<ul className={styles.reviews}>
				{reviews.map(({ id, text }) => (
					<ReviewItem key={id} text={text} />
				))}
			</ul>
		</div>
	)
}
