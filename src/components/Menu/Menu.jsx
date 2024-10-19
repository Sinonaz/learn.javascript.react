import { MenuItem } from "../MenuItem/MenuItem"

export const Menu = ({ menu }) => {
	return (
		<ul>
			{menu.map(id => (
				<MenuItem key={id} id={id} />
			))}
		</ul>
	)
}
