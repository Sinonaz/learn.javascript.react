import { Button } from "../button/button"
import { useAuth } from "../UserContext/use-auth"

export const AuthButton = () => {
	const { user, toggleAuth } = useAuth()

	return (
		<>
			<Button onClick={toggleAuth} text={user.isAuth ? "Logout" : "Login"} />
			{user.isAuth && <p>{user.name}</p>}
		</>
	)
}
