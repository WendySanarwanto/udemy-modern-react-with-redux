export const ADD_ITEM = 'add_item';
export const REMOVE_ITEM = 'remove_item';

export function addItem(newItem) {
  // console.log(`[DEBUG] - <reducers.addItem> newItem: \n`, newItem);
  return {
    type: ADD_ITEM,
    payload: newItem 
  };
}

export function removeItem(item){
  return {
    type: REMOVE_ITEM,
    payload: item
  }
}