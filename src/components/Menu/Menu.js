import {useState} from "react"

import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button"

import Logo from "../../assets/png/rc-redux.png"

import { useDispatch } from "react-redux"
import {openModalAction} from "../../redux/actions/modalActions"

export default function Menu(){

    // hook to dispatch actions to the reducer
    const dispatch = useDispatch();

    // function that dispatches the action to the reducer for state manipulation
    // sets modal state to true
    const openModal = ()=>{dispatch(openModalAction(true));}
    
    const [hover, setHover] = useState(false);
    const [color, setColor] = useState("#764abc");

    const toggleColor = ()=>{
        hover ? setColor("#764abc") : setColor("#61DBFB");
        setHover(!hover);
    }

    return(
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand>
                <img src={Logo} alt="Notes app with Redux" 
                width='120'
                height='100%'
                />
                Notes App
            </Navbar.Brand>
                <Button onClick={openModal} style={{backgroundColor: (color), borderColor:(color)}} onMouseEnter={toggleColor} onMouseLeave={toggleColor} >New note</Button>
            </Container>
        </Navbar>
    )
}