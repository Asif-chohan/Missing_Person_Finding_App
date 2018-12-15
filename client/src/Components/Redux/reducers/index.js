import { combineReducers } from 'redux';
import AllReducers from './AllReducers';

const rootReducer = combineReducers({
    LetsFind: AllReducers,
});

export default rootReducer;
