import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCog
  } from "@fortawesome/free-solid-svg-icons";
import './admin.css'; 

let BtnAdminContent = { display: "block" };

class BtnAdmin extends React.Component{ 
    withBlock = (Component) => {
        const { token } = this.props;
        const RedirectToBlock = () => { BtnAdminContent = { display: "none" };};
        return (token != null ? Component : RedirectToBlock);
      };
    
    render() {
        const { token } = this.props;
        if (token != null ) {
            return (
                <div style={BtnAdminContent} className="BtnSettingContent" >
                    <Button color="link" className="BtnSetting">
                        <Link to="/dashboardadmin" >
                            <FontAwesomeIcon icon={faCog} className="IconBackground" />
                        </Link>
                    </Button>
                </div>
            );
        } else {
            return (
                <div />
            )
        }
    }
}

const mapStateToProps = (state) => ({
    token: state.reducer.token,
  });

export default connect(mapStateToProps)(BtnAdmin);
