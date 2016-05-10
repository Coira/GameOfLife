import {createStore} from 'redux';
import reducer from './reducers';
import fromJS from 'immutable';

const store = createStore(reducer);
export default store;
