import { Menu } from "../Menu/Menu"
import { Reviews } from "../Reviews/Reviews"

export const Restaurant = ({ id, name, menu, reviews }) => {
	if (!name) return null

	return (
		<div key={id}>
			<h2>{name}</h2>

			<Menu menu={menu} />

			<Reviews reviews={reviews} />
		</div>
	)
}
