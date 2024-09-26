import { MenuItem } from "./MenuItem"

export const Menu = ({ menu }) => {
	if (menu.length < 1) return null

	return (
		<>
			<h3>Menu</h3>
			<ul>
				{menu.map(({ id, name }) => (
					<MenuItem key={id} name={name} />
				))}
			</ul>
		</>
	)
}
