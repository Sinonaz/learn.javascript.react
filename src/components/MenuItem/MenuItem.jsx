import { Counter } from "../Counter/Counter"

export const MenuItem = ({ id, name }) => (
	<li key={id}>
		{name}
		<Counter />
	</li>
)
