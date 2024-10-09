import { useState } from "react"
import { UserContext } from "."

export const UserContextProvider = ({ children }) => {
	const [user, setAuth] = useState({ isAuth: false })

	const toggleAuth = () =>
		setAuth(user => {
			return user.isAuth
				? { isAuth: false }
				: { isAuth: true, name: "ChicChiric" }
		})

	return (
		<UserContext.Provider value={{ user, toggleAuth }}>
			{children}
		</UserContext.Provider>
	)
}
