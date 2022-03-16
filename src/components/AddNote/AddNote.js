import { useState } from "react";

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"

// redux
import { useDispatch, useSelector } from "react-redux";
import { validateFormAction } from "../../redux/actions/formActions";
import { noteAddedAction } from "../../redux/actions/notesActions";
import { openModalAction } from "../../redux/actions/modalActions";

// libraries
import { format } from "fecha";
import { v4 as uuidv4} from 'uuid';

export default function FormAddNote(){

    const dispatch = useDispatch();
    
    // to update note state
    const noteAdded = (state)=>{dispatch(noteAddedAction(state))}

    // to update error state
    const isError = (state)=>{dispatch(validateFormAction(state))}

    const openModal = (state)=>{dispatch(openModalAction(state))}

    // get value from error state
    const errorFormValue = useSelector((state)=>{return state.form.isError})

    const [ formValues, setFormValues ] = useState({
        title: "",
        note:""
    });

    // function to update the state with every change inside the form
    const getChanges = (event)=>{
        setFormValues({
            ...formValues,
            [event.target.name] : event.target.value
        })
    }

    const submitForm = (event)=>{
        event.preventDefault();        
        const { title, note } = formValues;

        if(!title || !note){
            isError(true)
        } else {
            isError(false)
            const date = format(new Date(), 'MM-DD-YYYY hh:mm:ss A')
            noteAdded({
                id: uuidv4(),
                title: title,
                note: note,
                date: date})
            openModal(false)
        }

    }

    const [ color, setColor] = useState('#764abc');
    const [ isHover, setIsHover] = useState(false);

    const toggleColor = ()=>{
        isHover ? setColor('#764abc'): setColor('#61DBFB');
        setIsHover(!isHover);
    }

    return(
        <Form onChange={getChanges} onSubmit={submitForm}>
            <Form.Group className="mb-3" >
                <h2>New Note</h2>
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Control type='text' name='title' placeholder='Title'/>
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Control as='textarea' name='note' rows='3' placeholder='Enter your note...'/>
            </Form.Group>
            <Button type="submit" style={{backgroundColor:(color), borderColor:(color)}} onMouseEnter={()=>{toggleColor()}} onMouseLeave={()=>{toggleColor()}}>Add Note</Button>
            {errorFormValue ?
            <Alert variant="danger" className="mt-3">
                <p>Please complete all fields</p>
            </Alert>: null }
        </Form>
    );
}