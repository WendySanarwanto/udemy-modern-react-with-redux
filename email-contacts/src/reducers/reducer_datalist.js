import _ from 'lodash';
import { FETCH_DATA } from '../actions/index';

export default function(state={}, action){
    console.log(`[DEBUG] - <reducers/reducer_datalist> action: \n`, action);
    console.log(`[DEBUG] - <reducers/reducer_datalist> state: \n`, state);
    switch(action.type){
        case FETCH_DATA:
            const mappedDataList = _.mapKeys(action.payload, "id");
            console.log(`[DEBUG] - <reducers/reducer_datalist.FETCH_DATA> mappedDataList: \n`, mappedDataList);
            return mappedDataList;
        default:
            return state;
    }
}