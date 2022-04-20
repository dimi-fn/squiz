const initState = { roomID: 0, UserName: [] };

const gameReducer = (state=initState, action) => {
    switch(action.type){
        case 'CREATE_ROOM':
            return { ...state, roomID: action.payload };
        case 'CREATE_USER':
            return { ...state, UserName: [...state.UserName, action.payload]};
        default:
            return state
    };
};

export default gameReducer;

