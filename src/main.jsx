import { createRoot } from "react-dom/client"
import { restaurants } from "./mock"

const rootElement = document.getElementById("root")

const root = createRoot(rootElement)

const getRestaurantItem = (id, name, menu, reviews) => {
	return (
		<li key={id}>
			<h2>{name}</h2>

			<h3>Menu</h3>

			<ul>
				{menu.map(({ id, name }) => (
					<li key={id}>{name}</li>
				))}
			</ul>

			<h3>Reviews</h3>

			<ul>
				{reviews.map(({ id, text }) => (
					<li key={id}>{text}</li>
				))}
			</ul>
		</li>
	)
}

root.render(
	<div>
		<h1>Restaurant list</h1>

		<ul>
			{restaurants.map(({ id, name, menu, reviews }) =>
				getRestaurantItem(id, name, menu, reviews)
			)}
		</ul>
	</div>
)
