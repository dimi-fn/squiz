//import axios from 'axios';

const setRoomID = roomID => ({ type: 'LOADING', payload: roomID });


const setUserName = UserName => ({ 
    type: 'LOAD_USER',
    payload: UserName
});

export const sendRoomID = roomID => {
    return async dispatch => {
        dispatch(setRoomID(roomID));
    };
};

export const sendUserName = UserName => {
    return async dispatch => {
        dispatch(setUserName(UserName));
    };
};

