import { useEffect, useState } from "react"

export const ProgressBar = () => {
	const [currentPercent, setCurrentPercent] = useState(0)

	useEffect(() => {
		const updateProgress = () =>
			setCurrentPercent(
				(window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
					100
			)

		window.addEventListener("scroll", updateProgress)

		return () => window.removeEventListener("scroll", updateProgress)
	}, [])

	return (
		<div
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				backgroundColor: "orange",
				height: "15px",
				width: `${currentPercent}%`,
			}}
		></div>
	)
}
