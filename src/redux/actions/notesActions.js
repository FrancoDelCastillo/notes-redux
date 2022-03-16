const NOTE_ADDED = 'NOTE_ADDED'
const NOTE_DELETED = 'NOTE_DELETED'

export const noteAddedAction = (noteAdded)=>{
    return {
        type: NOTE_ADDED,
        payload: noteAdded
    }
}

export const noteDeletedAction = (id)=>{
    return{
        type: NOTE_DELETED,
        payload: id
    }
}