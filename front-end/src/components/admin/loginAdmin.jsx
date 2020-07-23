import React, { useState } from 'react';
import {
  Input,
  Button,
} from 'reactstrap';
import {
  useHistory,
  Link,
} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { changeToken } from '../../redux/tokenReducer';
import './admin.css';

const LoginAdminContainer = ({ dispatch }) => {
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

    axios.post('http://localhost:8000/admin', {
      username,
      password,
    })
      .then((res) => res.data)
      .then((res) => {
        dispatch(changeToken(res.token));
        console.log(res);
        axios.get('http://localhost:8000/', { headers: { Authorization: `Bearer ${res.token}` } })
          .then((res) => res.data)
          .then((res) => {
            history.push('/');
          });
      });
  }

  return (
    <>
        <div className="HomeLogo">
            <Link to="/" >
                <img src="https://user-images.githubusercontent.com/57908921/88237718-206b3b00-cc80-11ea-9032-4bc5e7add012.png" alt="Home" />
            </Link>
        </div>
        <div className="FormEmployee FormContent">
        <form onSubmit={submitForm}>
            <div className="form-data DivInput">
            <label htmlFor="username" className="LabelForm">Nom d'utilisateur</label>
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
            <div className="form-data BtnLoginDiv">
                <Button type="submit" className="BtnLogin">
                    Connexion
                </Button>
            </div>
        </form>
        </div>
    </>
  );
};

const LoginAdmin = connect()(LoginAdminContainer);
export default LoginAdmin;