import classNames from "classnames"
import styles from "./button.module.css"
import { useTheme } from "../ThemeContext/use-theme"

export const Button = ({
	type = "button",
	text,
	onClick,
	className,
	isDisabled,
	isActive,
}) => {
	const { value } = useTheme()

	return (
		<button
			type={type}
			className={classNames(
				className,
				styles.button,
				isActive && styles.active,
				{ [styles.dark]: value === "dark" }
			)}
			onClick={onClick}
			disabled={isDisabled}
		>
			{text}
		</button>
	)
}
