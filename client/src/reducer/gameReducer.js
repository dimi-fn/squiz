const initState = { roomID: 0, UserName: [] };

const gameReducer = (state=initState, action) => {
    switch(action.type){
        case 'LOADING':
            return { ...state, location: action.payload };
        case 'LOAD_USER':
            return { ...state, UserName: [...state.UserName, action.payload]};
        case 'SET_ERROR':
            return { ...state, error: action.payload};
        default:
            return {...state}
    };
};

export default gameReducer;
