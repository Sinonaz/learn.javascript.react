import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import { ProgressBar } from "../ProgressBar/ProgressBar"
import { ThemeButton } from "../ThemeButton/ThemeButton"
import { AuthButton } from "../AuthButton/AuthButton"
import { Cart } from "../Cart/Cart"

export const Layout = ({ children }) => {
	return (
		<div>
			<ProgressBar />

			<ThemeButton />

			<AuthButton />

			<Header />

			{children}

			<Cart />

			<Footer />
		</div>
	)
}
