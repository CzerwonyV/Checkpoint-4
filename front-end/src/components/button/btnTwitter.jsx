import React from "react";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import './btn.css';

const BtnTwitter = () => {
  return (
    <>
      <Button color="link" className="BtnLinkedinNav">
        <a
          href="https://twitter.com/CzerwonyV"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <FontAwesomeIcon icon={faTwitter} className="IconBackground"/>
        </a>
      </Button>
    </>
  );
};
export default BtnTwitter;