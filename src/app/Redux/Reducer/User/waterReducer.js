const initialState = {
    targetVolume : 0,
    bottleVolume : 0,
    glassVolume : 0,
    consumedWater : 0,
}
const waterDefaultState = [];

const waterReducer = (state = initialState , action) => {
        switch(action.type){
            case 'setTargetVolume' :
                return {
                    ...state,
                    targetVolume : action.target
                };
            case 'setBottleVolume' :
                return {
                    ...state,
                    bottleVolume : action.bottle
                };
            case 'setGlassVolume' :
                return {
                    ...state,
                    glassVolume : action.glass
                };
            case 'setConsumeWater':
                return  {
                    ...state,
                    consumedWater : action.consume
                }
            case 'waterReset':
                return{
                    waterDefaultState,
                }        
            default:
                return state;

        }
}

export default waterReducer;