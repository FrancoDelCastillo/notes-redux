// modal is closed as initial state
const INITIAL_STATE = {
    isOpen: false
};

// function that returns an state
export default function modalReducer(state=INITIAL_STATE, action){
    // verifies action
    switch (action.type) {
        case "STATE_MODAL":
            return {...state,
                isOpen: action.payload
            };
        default:
            return state;
    }
}