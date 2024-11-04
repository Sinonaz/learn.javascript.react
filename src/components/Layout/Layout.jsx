"use client"

import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import { ProgressBar } from "../ProgressBar/ProgressBar"
import { ThemeButton } from "../ThemeButton/ThemeButton"
import { AuthButton } from "../AuthButton/AuthButton"
import { Cart } from "../Cart/Cart"
import { ThemeContextProvider } from "../ThemeContext/ThemeContext"
import { UserContextProvider } from "../UserContext/UserContext"
import { Provider } from "react-redux"
import { store } from "../../redux/redux"

export const Layout = ({ children }) => {
  return (
    <div>
      <Provider store={store}>
        <ThemeContextProvider>
          <UserContextProvider>
            <ProgressBar />
            <ThemeButton />
            <AuthButton />
            <Header />
            {children}
            <Cart />
            <Footer />
          </UserContextProvider>
        </ThemeContextProvider>
      </Provider>
    </div>
  )
}
