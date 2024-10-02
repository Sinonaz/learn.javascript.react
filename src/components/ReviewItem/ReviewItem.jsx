import styles from "./reviewItem.module.css"

export const ReviewItem = ({ id, text }) => (
	<li className={styles.reviewItem} key={id}>
		{text}
	</li>
)
