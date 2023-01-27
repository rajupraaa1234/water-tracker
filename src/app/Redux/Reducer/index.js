import  {combineReducers} from 'redux';

import graphReducer from './Graph/graphReducer';
import userReducer from './User/userReducer';
import addWaterModal from './Modal/addWaterModal';
import waterReducer from './User/waterReducer';


const rootReducer = combineReducers({
    graphReducer,
    userReducer,
    addWaterModal,
    waterReducer,
});

export default rootReducer;
