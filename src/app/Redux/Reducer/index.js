import  {combineReducers} from 'redux';

import graphReducer from './Graph/graphReducer';
import userReducer from './User/userReducer';


const rootReducer = combineReducers({
    graphReducer,
    userReducer,
});

export default rootReducer;
