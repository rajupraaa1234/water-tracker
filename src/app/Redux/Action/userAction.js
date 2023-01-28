

//  {type : 'setUsername' , username : temp}

const setUsername = (user) =>{
    return {
        type : 'setUsername' , 
        username : user
    };
}

const setUserLang = (lang) =>{
    return {
        type : 'setLanguage' , 
        language : lang
    };
}

const userReset = () =>{
    return {
        type : 'userReset',
    }
}

export {
    setUsername,
    setUserLang,
    userReset,
}

