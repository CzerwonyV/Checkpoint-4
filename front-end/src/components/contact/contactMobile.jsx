import React from "react";
import { ListGroupItem } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./contact.css";
import {
  faMobileAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  faEnvelope,
  faFolder
} from "@fortawesome/free-regular-svg-icons";
import NavBarCV from "../navbar/navbar";

const ContactMobile = () => {
  return (
    <>
    <NavBarCV />
      <div className="ContactContent">
        <ListGroupItem className="ListGroupItem" id="ListGroupItem1">
          <a
            href="https://twitter.com/CzerwonyV"
            target="_blank"
            rel="noopener noreferrer"
            className="TextContact"
          >
            <FontAwesomeIcon icon={faTwitter} id="logoLinkedin" />
            &nbsp;Twitter
          </a>
        </ListGroupItem>
        <ListGroupItem className="ListGroupItem" id="ListGroupItem1">
          <a
            href="https://fr.linkedin.com/in/victor-veyrier-ab6948194"
            target="_blank"
            rel="noopener noreferrer"
            className="TextContact"
          >
            <FontAwesomeIcon icon={faLinkedin} id="logoLinkedin" />
            &nbsp;Linkedin
          </a>
        </ListGroupItem>
        <ListGroupItem className="ListGroupItem">
          <a
            href="https://github.com/CzerwonyV"
            target="_blank"
            rel="noopener noreferrer"
            className="TextContact"
          >
            <FontAwesomeIcon icon={faGithubSquare} id="logoGithub" />
            &nbsp;GitHub
          </a>
        </ListGroupItem>
        <ListGroupItem className="ListGroupItem">
          <a
            href="https://codesandbox.io/u/CzerwonyV/sandboxes"
            target="_blank"
            rel="noopener noreferrer"
            className="TextContact"
          >
            <FontAwesomeIcon icon={faFolder} />
            &nbsp;Sandboxes
          </a>
        </ListGroupItem>
        <ListGroupItem className="ListGroupItem">
        <a href="mailto:victor.veyrier@icloud.com" className="TextContact"><FontAwesomeIcon icon={faEnvelope} />&nbsp;victor.veyrier@icloud.com</a>
        </ListGroupItem>
        <ListGroupItem className="ListGroupItem TextContact" id="ListGroupItemLast">
          <FontAwesomeIcon icon={faMobileAlt} />
          &nbsp;06 04 19 79 97
        </ListGroupItem>
      </div>
    </>
  );
};
export default ContactMobile;