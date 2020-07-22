import React from "react";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import './btn.css';

const BtnLinkedin = () => {
  return (
    <>
      <Button color="link" className="BtnLinkedinNav">
        <a
          href="https://www.linkedin.com/in/victor-veyrier-ab6948194"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="IconBackground"/>
        </a>
      </Button>
    </>
  );
};
export default BtnLinkedin;