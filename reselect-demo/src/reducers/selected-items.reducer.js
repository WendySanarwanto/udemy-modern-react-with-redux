import _ from 'lodash';
import { SELECT_POST } from '../action';

export default function(state = [], action) {
	switch(action.type){
		case SELECT_POST:
			const { id, isSelected } = action.payload;
			let newState = [...state];
			if (isSelected){
				newState = _.union(newState, [id]);
			} else {
				_.remove(newState, _id => _id === id);
			}
			// console.log(`[DEBUG] - <selected-items.reducer> action: \n`, action);
			console.log(`[DEBUG] - <selected-items.reducer> newState: \n`, newState);
			return newState;
		default:
			return state;
	}
}