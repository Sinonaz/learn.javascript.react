import { Counter } from "../Counter/Counter"
import { ACTION_TYPE } from "./constants"
import { useForm } from "./use-form"

export const ReviewForm = () => {
	const { name, text, rating, setAction, increaseRating, decreaseRating } =
		useForm()

	return (
		<form onReset={() => setAction(ACTION_TYPE.CLEAR)}>
			<div>
				<label>
					Name
					<input
						type='text'
						name='name'
						value={name}
						onChange={({ target }) => setAction(ACTION_TYPE.NAME, target.value)}
					/>
				</label>
			</div>
			<div>
				<label>
					Text
					<textarea
						name='text'
						value={text}
						onChange={({ target }) => setAction(ACTION_TYPE.TEXT, target.value)}
					></textarea>
				</label>
			</div>
			<div>
				<label>
					Rating
					<input type='hidden' name='rating' value={rating} />
					<Counter
						value={rating}
						increase={() => increaseRating(rating)}
						decrease={() => decreaseRating(rating)}
					/>
				</label>
			</div>

			<button type='reset'>Clear</button>
		</form>
	)
}
