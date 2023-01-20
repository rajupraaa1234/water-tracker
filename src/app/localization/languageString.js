import React from 'react';
import LocalizedStrings from 'react-native-localization';

const strings = new LocalizedStrings({

    eng : {
       today : "Today",
       history : 'Hostory',
       graph : 'Graph',
       homescreen : 'HomeScreen',
    },
    hi : {
        today : "आज",
        history : 'इतिहास',
        graph : 'ग्राफ',
        homescreen : 'होम स्क्रीन',
    },
    pun : {
        today : "ਅੱਜ",
        history : "ਇਤਿਹਾਸ",
        graph : 'ਗ੍ਰਾਫ਼',
        homescreen : 'ਹੋਮਸਕਰੀਨ',
    },
    ur : {
        today : "آج",
        history : "تاریخ",
        graph : 'گراف',
        homescreen : 'گھر کی سکرین',
    },
    ka : {
        today : "ಇಂದು",
        history : "ಇತಿಹಾಸ",
        graph : 'ಗ್ರಾಫ್',
        homescreen : 'ಮುಖಪರದೆ',
    }
});
export default strings;