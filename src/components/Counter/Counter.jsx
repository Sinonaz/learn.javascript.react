export const Counter = ({ value, increase, decrease }) => {
	return (
		<>
			<button type='button' onClick={increase}>
				+
			</button>
			{value}
			<button type='button' onClick={decrease}>
				-
			</button>
		</>
	)
}
