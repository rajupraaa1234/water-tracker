const initialState = {
    username : '',
    selectedLang : '',
}

const usersDefaultState = [];


const userReducer = (state = initialState , action) => {
        switch(action.type){
            case 'setUsername' :
               return {
                 ...state,
                 username : action.username,
               };
            case 'setLanguage' : 
                return {
                    ...state,
                    selectedLang : action.language,
                };   
            case 'userReset':
                return {
                    usersDefaultState,
                }    
            default : 
               return state;    
        }
}

export default userReducer;