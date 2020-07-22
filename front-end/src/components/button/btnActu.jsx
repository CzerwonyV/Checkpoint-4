import React from "react";
import { Button } from "reactstrap";
import './btn.css';

const BtnActu = () => {
  return (
    <div className="BtnActuContent">
      <div className="CercleBtn">
        <Button color="link" className="BtnWild">
          <a
            href="https://www.wildcodeschool.com/fr-FR"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <img src="https://user-images.githubusercontent.com/57908921/85471152-54374000-b5b0-11ea-9950-ca2b981eabac.png" alt="BtnWild" className="ImgWild" />
          </a>
        </Button>
      </div>
      <div className="TitleActuContent">
        <h4 className="TitleActu">Mon actu :</h4>
      </div>
    </div>
  );
};

export default BtnActu;