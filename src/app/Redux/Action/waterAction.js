const setTargetVolume = (val) =>{
    return {
        type : 'setTargetVolume' , 
        target : val
    };
}

const setBottleVolume = (val) =>{
    return {
        type : 'setBottleVolume' , 
        bottle : val
    };
}

const setGlassVolume = (val) =>{
    return {
        type : 'setGlassVolume', 
        glass : val
    };
}

const setConsumedWaster = (val) => {
    return {
        type : 'setConsumeWater',
        consume : val
    };
}

const resetWater = () =>{
    return {
        type : 'waterReset',
    }
}

export {
    setTargetVolume,
    setBottleVolume,
    setGlassVolume,
    setConsumedWaster,
    resetWater,
}