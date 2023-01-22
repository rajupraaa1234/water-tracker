

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

export {
    setUsername,
    setUserLang,
}

