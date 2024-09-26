export const Tab = ({ tabId, name, changeItem, currentItem }) => (
	<button
		type='button'
		disabled={currentItem.id === tabId}
		onClick={() => changeItem(tabId)}
	>
		{name}
	</button>
)
