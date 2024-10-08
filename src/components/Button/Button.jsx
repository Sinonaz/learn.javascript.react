import classNames from "classnames"
import styles from "./button.module.css"

export const Button = ({
	type = "button",
	text,
	onClick,
	className,
	isDisabled,
	isActive,
}) => (
	<button
		type={type}
		className={classNames(className, styles.button, isActive && styles.active)}
		onClick={onClick}
		disabled={isDisabled}
	>
		{text}
	</button>
)
