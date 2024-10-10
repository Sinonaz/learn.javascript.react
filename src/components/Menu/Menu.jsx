import { MenuItem } from "../MenuItem/MenuItem"

export const Menu = ({ menu }) => {
	return (
		<>
			<h3>Menu</h3>
			<ul>
				{menu.map(id => (
					<MenuItem key={id} id={id} />
				))}
			</ul>
		</>
	)
}
