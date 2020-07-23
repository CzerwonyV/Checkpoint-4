import React from "react";
import axios from 'axios';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button
  } from "reactstrap";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {
    faGithub
  } from "@fortawesome/free-brands-svg-icons";
import "./home.css";

export default class SiteCardContent extends React.Component {
    state = {
        sitecard: []
    }
  
    componentDidMount() {
      axios.get(`http://localhost:8000/sitecard`)
        .then(res => {
          const sitecard = res.data;
          this.setState({ sitecard });
        })
    }
  
    render() {
      return (
        <div className="CardContent">
          { this.state.sitecard.map(sitecard => { return (
            <Card>
                <CardImg
                top
                width="100%"
                src={sitecard.imgurl}
                alt={sitecard.name}
                />
            <CardBody>
              <CardTitle>
                <h4 className="TitleGroupCard">{sitecard.name}</h4>
              </CardTitle>
              <CardText>
                {sitecard.textexplication}          
              </CardText>
              <a
                href={sitecard.urlsite}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="TitleGroupCard BtnPortfolio">Voir le site</Button>
              </a>
              <a
                href={sitecard.urlgithub}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button id="SpaceButton" className="TitleGroupCard BtnPortfolio"><FontAwesomeIcon icon={faGithub} id="logoGithubCard" /></Button>
              </a>
            </CardBody>
          </Card>
          )
          })}
        </div>
      )
    }
  }