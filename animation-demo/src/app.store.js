import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const createAppStore = applyMiddleware()(createStore);
const appStore = createAppStore(reducers);

export default appStore;