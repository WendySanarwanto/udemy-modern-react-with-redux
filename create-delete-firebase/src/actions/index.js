import Firebase from 'firebase';

const FB_STORE_URL = 'https://fbredux.firebaseio.com/';
const DataList = new Firebase(FB_STORE_URL);

export const FETCH_DATALIST = 'fetch_datalist';

export function fetchDataList(){
  return dispatch => {
    DataList.on(`value`, snapshot => {
      const payload = snapshot.val();
      console.log(`[DEBUG] - <fetchDataList> payload: \n`, payload);
      dispatch({
        type: FETCH_DATALIST,
        payload
      });
    });
  };
}