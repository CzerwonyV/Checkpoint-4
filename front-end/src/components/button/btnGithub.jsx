import React from "react";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import './btn.css';

const BtnGithub = () => {
  return (
    <>
      <Button color="link">
        <a
          href="https://github.com/CzerwonyV"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <FontAwesomeIcon icon={faGithub} className="IconBackground"/>
        </a>
      </Button>
    </>
  );
};
export default BtnGithub;