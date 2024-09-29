import { useState } from "react"

export const Counter = () => {
	const [value, setValue] = useState(0)

	const increase = () => {
		if (value >= 5) return

		setValue(value + 1)
	}

	const decrease = () => {
		if (value < 1) return

		setValue(value - 1)
	}

	return (
		<>
			<button onClick={increase}>+</button>
			{value}
			<button onClick={decrease}>-</button>
		</>
	)
}
