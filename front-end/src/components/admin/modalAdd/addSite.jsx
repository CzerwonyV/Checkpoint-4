import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './modalAdd.css';

const AddSite = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    
    const onChangeUsername = (e) => {
        setUsername(
        e.target.value,
        );
    };
    
    const onChangePassword = (e) => {
        setPassword(
        e.target.value,
        );
    };
    
    function submitForm(e) {
        e.preventDefault();
        const url = 'http://localhost:8000/users/register';
    
        axios.post(url, {
        username,
        password,
        })
        .then((res) => res.data)
        .then((res) => {
            alert(`Vôtre compte ${res.username} a bien été enregistré !`);
            axios.post('http://localhost:8000/users/login', {
                username,
                password,
                })
                .then((res) => res.data)
                .then((res) => {
                    history.push('/dashboardadmin');
                });
        })
    
        .catch(() => {
            alert(`Erreur lors de l'ajout d'un compte : ${e.message}`);
        });
    }

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className="BtnModalAdd" onClick={toggle}>Ajoutez un site</Button>
      <Modal isOpen={modal} toggle={toggle} className="" >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
            <form onSubmit={submitForm}>
                <div className="form-data DivInput">
                <label htmlFor="username" className="LabelForm">Nom d&apos;utilisateur</label>
                <Input
                    type="text"
                    id="username"
                    name="username"
                    onChange={onChangeUsername}
                    value={username}
                    required
                />
                </div>
                <div className="form-data DivInput">
                <label htmlFor="password" className="LabelForm">Mot de passe</label>
                <Input
                    type="password"
                    id="password"
                    name="password"
                    onChange={onChangePassword}
                    value={password}
                    required
                />
                </div>
            </form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" type="submit" onClick={toggle}>Ajoutez</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddSite;
