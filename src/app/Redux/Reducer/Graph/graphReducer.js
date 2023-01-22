const initialState = {
    currentStatue : '',
    waterVolume : '',
    isTaken : '',
}


const graphReducer = (state = initialState , action) =>{
        switch(action.type){
            case 'setCurrentStatus' :
                return {
                    ...state,
                    currentStatue : action.status,
                };
            case 'setwaterVolume' :
                return {
                    ...state,
                    waterVolume : action.volume,
                };
            case 'setIsTaken' :
                return{
                    ...state,
                    isTaken : action.taken,
                };
            default :
                return state;        
        }
}

export default graphReducer;