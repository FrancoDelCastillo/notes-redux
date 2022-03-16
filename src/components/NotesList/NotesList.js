import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

// get the redux state
import { useDispatch, useSelector } from 'react-redux'

import { noteDeletedAction } from '../../redux/actions/notesActions'

export default function NotesList(){

    // get notes state value
    const notes = useSelector((state)=>{return state.notes.notesAdded})

    console.log(notes)

    return (
        <>
        { notes.length > 0? notes.map((item, index)=>{return <Note key={index} item={item}/>}):<h2 className="text-center">Notes here!</h2>}
            
        </>
    )
}


function Note(props){

    const {item:{id, title, note, date}} = props;

    const dispatch = useDispatch();
    const deleteNote = ()=>{dispatch(noteDeletedAction(id))}

    return(
        <Card className="mt-2 mb-2">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Created at: {date}</Card.Subtitle>
                <Card.Text>{note}</Card.Text>
                <Button variant='danger' onClick={deleteNote}>Delete Note</Button>
            </Card.Body>
        </Card>
    )
}