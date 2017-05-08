import store from '../store'
import {generate as id} from 'shortid'

export function destroyItem(id) {
	store.dispatch({
		type: 'DESTROY_ITEM',
		id: id
	})
}

export function addItem(title){
	store.dispatch({
		type: 'ADD_ITEM',
		item: {
			id: 'id' + id(),
			title: title,
			status: 'active'
		}
	})
}

export function updateStatus(id, status) {
	store.dispatch({
		type: 'UPDATE_STATUS',
		id: id,
		status: status
	})
}