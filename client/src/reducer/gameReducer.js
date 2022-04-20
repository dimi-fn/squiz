const initState = { roomID: 0, questions: 10, category : "Sports", difficulty : "Medium", result: [] };

const gameReducer = (state=initState, action) => {
    switch(action.type){
        case 'CREATE_ROOM':
            return { ...state, roomID: action.payload };
        case 'CREATE_USER':
            return { ...state, result: [...state.result, action.payload]};
        case 'CREATE_GAME':
            return { ...state, ...action.payload};
            /*return { ...state, questions: action.payload.questions, category: action.payload.category, difficulty: action.payload.difficulty};*/
        case 'UPDATE_SCORE':
            return { ...state, result: state.result.map(
                (User) => User.UserName === action.payload.UserName ? {
                    ...User, Score: action.payload.Score
                } : User
            )};

        default:
            return state
    };
};

export default gameReducer;

