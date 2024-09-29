import { useState } from "react"
import { Counter } from "../Counter/Counter"

export const DishCounter = () => {
	const [value, setValue] = useState(0)

	const increase = () => {
		if (value >= 5) return

		setValue(value + 1)
	}

	const decrease = () => {
		if (value < 1) return

		setValue(value - 1)
	}

	return <Counter value={value} increase={increase} decrease={decrease} />
}
