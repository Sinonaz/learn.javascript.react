import { ReviewItem } from "./ReviewItem"

export const Reviews = ({ reviews }) => {
	return (
		<>
			<h3>Reviews</h3>

			<ul>
				{reviews.map(({ id, text }) => (
					<ReviewItem key={id} text={text} />
				))}
			</ul>
		</>
	)
}
