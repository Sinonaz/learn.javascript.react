import { useContext } from "react"
import { UserContext } from "."

export const useAuth = () => {
	return useContext(UserContext)
}
