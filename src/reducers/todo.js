const InitialState = {
	items: []
}



export function todoReducer(state = InitialState, action) {
 	switch(action.type) {
 		case 'ADD_ITEM':
 			{
 			let obj = { items: [...state.items, action.item]}
 			console.log(obj)
 			return obj
 			}
		case 'DESTROY_ITEM':
			{
			 let obj = { items: state.items.filter(item=>{
				return item.id !== action.id
			})}
			 console.log(obj)
			 return obj
			}
		case 'UPDATE_STATUS':
			{
				let obj = {items: state.items.map(item=> {
					console.log('action id', action.id)
					console.log('item.id', item.id)
					console.log('status', action.status)
					if (action.id === item.id) {
						return {
							id: item.id,
							title: item.title,
							status: action.status
						}
					}
					return item
				})}
				console.log(obj)
				return obj
			}
 		default:
 			return state
 	}
}