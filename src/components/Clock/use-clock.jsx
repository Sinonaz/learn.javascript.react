import { useEffect } from "react"

export const useClock = setTime => {
	useEffect(() => {
		const updateTime = () => {
			const dateNow = new Date().toLocaleTimeString()
			setTime(dateNow)
		}

		const intervalId = setInterval(updateTime, 1000)

		return () => clearInterval(intervalId)
	}, [setTime])
}
