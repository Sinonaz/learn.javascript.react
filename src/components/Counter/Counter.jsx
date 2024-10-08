import styles from "./counter.module.css"

export const Counter = ({ value, increase, decrease }) => {
	return (
		<div className={styles.counter}>
			<button className={styles.counterBtn} type='button' onClick={decrease}>
				-
			</button>
			{value}
			<button className={styles.counterBtn} type='button' onClick={increase}>
				+
			</button>
		</div>
	)
}
