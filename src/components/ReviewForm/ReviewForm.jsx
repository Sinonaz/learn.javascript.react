import { Counter } from "../Counter/Counter"
import { ACTION_TYPE } from "./constants"
import { useForm } from "./use-form"
import styles from "./reviewForm.module.css"

export const ReviewForm = () => {
	const { name, text, rating, setAction, increaseRating, decreaseRating } =
		useForm()

	return (
		<form className={styles.form} onReset={() => setAction(ACTION_TYPE.CLEAR)}>
			<div>
				<label className={styles.fieldWrap}>
					Name
					<input
						className={styles.field}
						type='text'
						name='name'
						value={name}
						onChange={({ target }) => setAction(ACTION_TYPE.NAME, target.value)}
					/>
				</label>
			</div>
			<div>
				<label className={styles.fieldWrap}>
					Text
					<textarea
						className={styles.field}
						name='text'
						value={text}
						onChange={({ target }) => setAction(ACTION_TYPE.TEXT, target.value)}
					></textarea>
				</label>
			</div>
			<div>
				<label className={styles.fieldWrap}>
					Rating
					<input type='hidden' name='rating' value={rating} />
					<Counter
						value={rating}
						increase={() => increaseRating(rating)}
						decrease={() => decreaseRating(rating)}
					/>
				</label>
			</div>

			<div className={styles.formFooter}>
				<button className={styles.formBtn} type='submit'>
					Send
				</button>
				<button className={styles.formBtn} type='reset'>
					Clear
				</button>
			</div>
		</form>
	)
}
