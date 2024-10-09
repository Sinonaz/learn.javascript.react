import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import { ProgressBar } from "../ProgressBar/ProgressBar"
import { ThemeButton } from "../ThemeButton/ThemeButton"

export const Layout = ({ children }) => {
	return (
		<>
			<ProgressBar />

			<ThemeButton />

			<Header />

			{children}

			<Footer />
		</>
	)
}
