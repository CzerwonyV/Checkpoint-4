import React from "react";
import axios from 'axios';
import "./home.css";

export default class ActuContent extends React.Component {
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
        <div className="ActuList">
          { this.state.actu.map(actu => <p className="ActuText">{actu.text}</p>)}
        </div>
      )
    }
  }