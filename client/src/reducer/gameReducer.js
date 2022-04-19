const initState = { roomID: 0, UserName: [] };

const searchReducer = (state=initState, action) => {
    switch(action.type){
        case 'LOADING':
            return { ...state, location: action.payload, loading: true };
        case 'LOAD_RESULT':
            return { ...state, UserName: action.payload, loading: false, error: false };
        case 'SET_ERROR':
            return { ...state, error: action.payload, loading: false };
        default:
            return {...state}
    };
};

export default searchReducer;
