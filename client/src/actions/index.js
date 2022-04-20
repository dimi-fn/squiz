//import axios from 'axios';

const setRoomID = roomID => ({ type: 'CREATE_ROOM', payload: roomID });


const setUserName = UserName => ({ 
    type: 'CREATE_USER',
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

