export const Tab = ({ tabId, name, changeItem }) => (
	<button type='button' onClick={() => changeItem(tabId)}>
		{name}
	</button>
)
