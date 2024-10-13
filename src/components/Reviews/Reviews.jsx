import { Link, useResolvedPath } from "react-router-dom"
import { ReviewItem } from "../ReviewItem/ReviewItem"
import styles from "./reviews.module.css"

export const Reviews = ({ reviews }) => {
	const { pathname } = useResolvedPath()

	return (
		<div>
			<h3>
				<Link to={"reviews"}>Reviews</Link>
			</h3>
			{pathname.endsWith("/reviews") && (
				<ul className={styles.reviews}>
					{reviews.map(id => (
						<ReviewItem key={id} id={id} />
					))}
				</ul>
			)}
		</div>
	)
}
