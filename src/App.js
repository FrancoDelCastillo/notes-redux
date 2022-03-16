import Container from "react-bootstrap/Container"

import Menu from "./components/Menu"
import Modal from "./components/Modal";
import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";

// redux
import store from './redux/store'
import { Provider } from "react-redux";

export default function App() {

  
  return (
    <Provider store={store}>
      <Menu/>
      <Container className="mt-5">
        <NotesList/>
      </Container>
      <Modal><AddNote/> </Modal>
    </Provider>
    
  );
}

