const initialState = {
    username : '',
    selectedLang : '',
}


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
            default : 
               return state;    
        }
}

export default userReducer;