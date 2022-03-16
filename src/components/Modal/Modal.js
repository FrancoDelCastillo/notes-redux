

import {Modal as ModalBootstrap} from "react-bootstrap"

import { useDispatch, useSelector } from "react-redux";
import {openModalAction} from '../../redux/actions/modalActions'



export default function Modal(props){
    const {children} = props;

    // get the value of modal state updated by the Add Note button's menu
    const isOpenModal = useSelector((state)=>{return state.modal.isOpen})

    // dispatch the action to the reducer for state manipulation
    const dispatch = useDispatch();
    const closeModal = ()=>{dispatch(openModalAction(false));}

    return(
        <ModalBootstrap
        show={isOpenModal}
        onHide={closeModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
            <ModalBootstrap.Body>
                {children}
            </ModalBootstrap.Body>
        </ModalBootstrap>
    )
}