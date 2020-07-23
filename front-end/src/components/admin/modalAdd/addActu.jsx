import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Input, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import './modalAdd.css';

const AddActu = () => {
    const [text, setText] = useState('');
    const history = useHistory();
    
    const onChangeText = (e) => {
        setText(
        e.target.value,
        );
    };
    
    function submitForm(e) {
        e.preventDefault();
        const url = 'http://localhost:8000/actu/add';
    
        axios.post(url, {
          text,
        })
        .then((res) => res.data)
        .then((res) => {
            alert(`Le texte a bien été enregistré !`);
            axios.post('http://localhost:8000/actu', {
                text
                })
                .then((res) => res.data)
                .then((res) => {
                    history.push('/dashboardadmin');
                });
        })
    
        .catch(() => {
            alert(`Erreur lors de l'ajout d'un text`);
        });
    }

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = <button className="close CloseModal" onClick={toggle}>&times;</button>;

  return (
    <div>
      <Button className="BtnModalAdd BtnAddMobile" onClick={toggle}>Ajoutez une actu</Button>
      <Modal isOpen={modal} toggle={toggle} className="" >
        <ModalHeader toggle={toggle} close={closeBtn}>Ajoutez un actu</ModalHeader>
        <ModalBody>
            <form onSubmit={submitForm}>
                <div className="form-data DivInput">
                <label htmlFor="text" className="LabelForm">Le text de l'actu </label>
                <Input
                    type="textarea"
                    id="text"
                    name="text"
                    onChange={onChangeText}
                    value={text}
                    required
                />
                </div>
                <div className="BtnAddDiv">
                    <Button className="BtnAdd" type="submit" onClick={toggle}>Ajoutez</Button>
                </div>
            </form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default AddActu;
