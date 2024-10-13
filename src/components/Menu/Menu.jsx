import { Link, useResolvedPath } from "react-router-dom"
import { MenuItem } from "../MenuItem/MenuItem"

export const Menu = ({ menu }) => {
	const { pathname } = useResolvedPath()

	return (
		<div>
			<h3>
				<Link to={"menu"}>Menu</Link>
			</h3>

			{!pathname.endsWith("/reviews") && (
				<ul>
					{menu.map(id => (
						<MenuItem key={id} id={id} />
					))}
				</ul>
			)}
		</div>
	)
}
