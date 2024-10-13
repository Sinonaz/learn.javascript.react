import { useState } from "react"
import { useClock } from "./use-clock"

export const Clock = () => {
	const dateNow = new Date().toLocaleTimeString()
	const [time, setTime] = useState(dateNow)

	useClock(setTime)

	return <p>{time}</p>
}
