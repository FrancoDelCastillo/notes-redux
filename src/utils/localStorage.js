// to store data
export const getStateLocalStorage = ()=>{
    const notesStorage = JSON.parse(localStorage.getItem('NOTES_STORAGE'));
    if(notesStorage === null){return undefined}
    return notesStorage;
}

// to get data
export const setStateLocalStorage =(state)=>{
    localStorage.setItem('NOTES_STORAGE',JSON.stringify(state))
}