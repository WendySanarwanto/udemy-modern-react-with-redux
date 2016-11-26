// State argument is not application state, only the state
// this reducer is responsible for
export default (state = null, action)=>{
    if (action.type === 'BOOK_SELECTED'){
        return action.payload
    }
    return state;
}