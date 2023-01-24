import  {combineReducers} from 'redux';

import graphReducer from './Graph/graphReducer';
import userReducer from './User/userReducer';
import addWaterModal from './Modal/addWaterModal';


const rootReducer = combineReducers({
    graphReducer,
    userReducer,
    addWaterModal,
});

export default rootReducer;
