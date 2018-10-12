import _ from 'lodash';
import shortid from 'shortid';
import { ADD_ITEM, REMOVE_ITEM } from '../actions';

export default function(state = {}, action) {
  switch(action.type){
    case ADD_ITEM:
      let newId = shortid.generate();
      const updatedState = { ...state, 
        [newId]: {
          id: newId,
          title: action.payload.title
        }
      };
      // console.log(`[DEBUG] - <items.reducer.ADD_ITEM> updatedState: \n`, updatedState);
      return updatedState;
    case REMOVE_ITEM:
      return  _.omit({ ...state }, action.payload.id);
    default: {
      return state;
    }
  }
}