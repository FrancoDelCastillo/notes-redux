// initial state
const INITIAL_STATE = {
    notesAdded: []
}

//reducer is a function that recieves the previous state and action and returns a new state
export default function notesReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case 'NOTE_ADDED':
            return {...state,
                notesAdded:[...state.notesAdded, action.payload]};
        case 'NOTE_DELETED':
            // for(let i = 0; i < state.notesAdded.length; i++){
            //     if(state.notesAdded[i].id === action.payload){
            //         state.notesAdded.splice(i,1) 
            //         break;       
            //     }
            // }
        
            return {...state,
                notesAdded: state.notesAdded.filter((note)=>{ return note.id !== action.payload})
            }
        default:
            return state;
    }

}

// THIS IS THE STATE 
// {notes: 
//  {notesAdded: []}
// }

// this is action.payload
// {id: uuidv4(),
//     title: title,
//     note: note,
//     date: date}

// ...state is a copy of the state object 
// we access to notes property
// ...state.notes is a copy of what is inside notes property
// and next we add a new object state into the notes property with action.payload