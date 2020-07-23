import React from "react";
import './admin.css';
import NavBarCV from "../navbar/navbar";

const NotFound = () => {
  return (
    <>
        <NavBarCV />
        <div className="NotFoundContent">
            Error 404 : NotFound.
        </div>
    </>
  );
};

export default NotFound;