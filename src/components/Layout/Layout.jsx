import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import { ProgressBar } from "../ProgressBar/ProgressBar"
import { ThemeButton } from "../ThemeButton/ThemeButton"
import { AuthButton } from "../AuthButton/AuthButton"
import { Cart } from "../Cart/Cart"
import { Outlet } from "react-router-dom"

export const Layout = () => {
	return (
		<div>
			<ProgressBar />

			<ThemeButton />

			<AuthButton />

			<Header />

			<Outlet />

			<Cart />

			<Footer />
		</div>
	)
}
