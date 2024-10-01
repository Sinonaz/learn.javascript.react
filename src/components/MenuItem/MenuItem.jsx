import { DishCounter } from "../DishCounter/DishCounter"

export const MenuItem = ({ id, name }) => (
	<li key={id}>
		{name}
		<DishCounter />
	</li>
)
