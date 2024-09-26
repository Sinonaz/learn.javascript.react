import { Counter } from "./Counter"

export const MenuItem = ({ id, name }) => (
	<li key={id}>
		{name}
		<Counter />
	</li>
)
