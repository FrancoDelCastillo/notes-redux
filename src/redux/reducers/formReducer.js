// initial prop for error state object
const INITIAL_STATE = {
    isError: false
}

// reducer is a function with action and state as arguments and the returns the new state
export default function formReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case 'VALIDATE_FORM':
            return {...state,
                isError: action.payload
            };
        default:
            return state;
    }

}
