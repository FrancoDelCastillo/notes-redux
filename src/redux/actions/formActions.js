// indicates the type of the action (an object with a type property)
const VALIDATE_FORM = 'VALIDATE_FORM';

// action creator: function that returns an action
export const validateFormAction =(state)=>{
    return {
        type: VALIDATE_FORM,
        payload: state,
    }
}
