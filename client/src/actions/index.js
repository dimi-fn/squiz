// import axios from 'axios';

const setRoomID = roomID => ({ type: 'CREATE_ROOM', payload: roomID });

const setUserName = UserName => ({ 
    type: 'CREATE_USER',
    payload: {UserName: UserName, Score: 0}
});

const setGame = ({questions, category, level}) => ({
    type: "CREATE_GAME",
    payload: {questions:questions, category:category, difficulty: level }
})

const UpdateScore = ({UserName, Score}) => ({ 
    type: 'UPDATE_SCORE',
    UserName : UserName,
    payload: Score
});

const EndGame = () => ({ 
    type: 'END_GAME'
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

export const sendUserScore = result => {
    return async dispatch => {
        dispatch(UpdateScore(result));
    };
}

export const sendGame = game => {
    return async dispatch => {
        dispatch(setGame(game));
    };
}

export const End = () => {
    return async dispatch => {
        dispatch(EndGame());
    };
}

