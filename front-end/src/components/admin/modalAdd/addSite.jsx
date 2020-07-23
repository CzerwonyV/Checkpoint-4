import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Input, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import './modalAdd.css';

const AddSite = () => {
    const [imgurl, setImgUrl] = useState('');
    const [name, setName] = useState('');
    const [textexplication, setTextExplication] = useState('');
    const [urlsite, setUrlSite] = useState('');
    const [urlgithub, setUrlGitHub] = useState('');
    const history = useHistory();
    
    const onChangeImgUrl = (e) => {
        setImgUrl(
        e.target.value,
        );
    };

    const onChangeName = (e) => {
        setName(
        e.target.value,
        );
    };

    const onChangeTextExplication = (e) => {
        setTextExplication(
        e.target.value,
        );
    };

    const onChangeUrlSite = (e) => {
        setUrlSite(
        e.target.value,
        );
    };

    const onChangeUrlGitHub = (e) => {
        setUrlGitHub(
        e.target.value,
        );
    };
    
    function submitForm(e) {
        e.preventDefault();
        const url = 'http://localhost:8000/sitecard/add';
    
        axios.post(url, {
          imgurl,
          name,
          textexplication,
          urlsite,
          urlgithub
        })
        .then((res) => res.data)
        .then((res) => {
            alert(`Le texte a bien été enregistré !`);
            axios.post('http://localhost:8000/sitecard', {
                imgurl,
                name,
                textexplication,
                urlsite,
                urlgithub
                })
                .then((res) => res.data)
                .then((res) => {
                    history.push('/dashboardadmin');
                });
        })
    
        .catch(() => {
            alert(`Erreur lors de l'ajout des données`);
        });
    }

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = <button className="close CloseModal" onClick={toggle}>&times;</button>;

  return (
    <div>
      <Button className="BtnModalAdd BtnAddMobile" onClick={toggle}>Ajoutez un site</Button>
      <Modal isOpen={modal} toggle={toggle} className="" >
        <ModalHeader toggle={toggle} close={closeBtn}>Ajoutez un site</ModalHeader>
        <ModalBody>
            <form onSubmit={submitForm}>
                <div className="form-data DivInput">
                <label htmlFor="imgurl" className="LabelForm">Le lien de l'image du site</label>
                <Input
                    type="text"
                    id="imgurl"
                    name="imgurl"
                    onChange={onChangeImgUrl}
                    value={imgurl}
                    required
                />
                </div>
                <div className="form-data DivInput">
                <label htmlFor="name" className="LabelForm">Le nom du site</label>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    onChange={onChangeName}
                    value={name}
                    required
                />
                </div>
                <div className="form-data DivInput">
                <label htmlFor="textexplication" className="LabelForm">Le text explicatif du site</label>
                <Input
                    type="textarea"
                    id="textexplication"
                    name="textexplication"
                    onChange={onChangeTextExplication}
                    value={textexplication}
                    required
                />
                </div>
                <div className="form-data DivInput">
                <label htmlFor="urlsite" className="LabelForm">L'url du site</label>
                <Input
                    type="text"
                    id="urlsite"
                    name="urlsite"
                    onChange={onChangeUrlSite}
                    value={urlsite}
                    required
                />
                </div>
                <div className="form-data DivInput">
                <label htmlFor="urlgithub" className="LabelForm">L'url du dépôt GitHub</label>
                <Input
                    type="text"
                    id="urlgithub"
                    name="urlgithub"
                    onChange={onChangeUrlGitHub}
                    value={urlgithub}
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

export default AddSite;
