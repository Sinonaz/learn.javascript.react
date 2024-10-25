import styles from "./reviewItem.module.css"

export const ReviewItem = ({ text }) => {
	return <li className={styles.reviewItem}>{text}</li>
}
