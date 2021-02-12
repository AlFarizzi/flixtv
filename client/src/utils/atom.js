import {atom} from 'recoil';

export const user = atom({
    key: 'user',
    default: {
        id: null,
        name:null,
        token:null
    }
})