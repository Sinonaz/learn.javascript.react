import { Button } from "../button/button"
import { useTheme } from "../ThemeContext/use-theme"

export const ThemeButton = () => {
	const { toggleTheme } = useTheme()

	return <Button onClick={toggleTheme} text={"Switch theme"} />
}
