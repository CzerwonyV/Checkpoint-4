import React from "react";
import axios from 'axios';
import "./admin.css";

export default class ActuAdmin extends React.Component {
    state = {
      actu: []
    }
  
    componentDidMount() {
      axios.get(`http://localhost:8000/actu`)
        .then(res => {
          const actu = res.data;
          this.setState({ actu });
        })
    }
  
    render() {
      return (
        <div className="ActuList ActuAdminContent">
          { this.state.actu.map(actu => <p className="ActuText ActuTextAdmin">{actu.text}</p>)}
        </div>
      )
    }
  }