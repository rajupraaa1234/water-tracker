const initialState = {
    isAddWaterModalVisible : false,
}

const addWaterModal = (state = initialState , action) =>{
    switch(action.type){
        case 'setAddwaterModalVisibility' : 
            return {
                ...state,
                isAddWaterModalVisible : action.visible,
            };
        default :
            return state;    
    }
}

export default addWaterModal;