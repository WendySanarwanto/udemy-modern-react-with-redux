import { FETCH_POSTS, SELECT_POST } from '../action';

export default function(state={}, action) {
  switch(action.type){
    case FETCH_POSTS: 
      return {
        "1": {
          id: 1,
          isSelected: false,
          title: "Top 20 Java Interview Questions from Investment Banks"
        }, 
        "2": {
          id: 2,
          isSelected: false,
          title: "How to Build an EOS FULL NODE SERVER"
        }, 
        "3": {
          id: 3,
          isSelected: false,
          title: "The Fetch API and asynchronous redux state"
        }, 
        "4": {
          id: 4,
          isSelected: false,
          title: "Electron Basics and Fundamentals"
        }, 
        "5": {
          id: 5,
          isSelected: false,
          title: "Coding Dynamic Behavior with the Strategy Pattern"
        }
      }
    
    case SELECT_POST:
      const {id, isSelected} = action.payload;
      const newState = { ...state };
      newState[id].isSelected = isSelected;
      console.log(`[DEBUG] - <post-items.reducer> newState: \n`, newState);
      return newState;

    default:
      return state;
  }
}